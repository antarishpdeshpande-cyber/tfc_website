const { neon } = require('@netlify/neon');

exports.handler = async (event, context) => {
    if (event.httpMethod !== "POST") {
        return { statusCode: 405, body: "Method Not Allowed" };
    }

    const { password, data } = JSON.parse(event.body);

    // Simple auth check
    if (password !== "tfc123") {
        return {
            statusCode: 401,
            body: JSON.stringify({ error: "Invalid Password" }),
        };
    }

    try {
        const sql = neon(process.env.NETLIFY_DATABASE_URL);

        // Upsert: Try to update id=1, if not exists, create it.
        // Note: neon package sends param queries safely.
        await sql`
      INSERT INTO site_config (id, data)
      VALUES (1, ${data})
      ON CONFLICT (id) 
      DO UPDATE SET data = ${data};
    `;

        return {
            statusCode: 200,
            body: JSON.stringify({ message: "Saved successfully" }),
        };
    } catch (error) {
        console.error("DB Error:", error);
        return {
            statusCode: 500,
            body: JSON.stringify({ error: "Failed to save to database" }),
        };
    }
};
