const { neon } = require('@neondatabase/serverless');

exports.handler = async (event, context) => {
  try {
    const sql = neon(process.env.NETLIFY_DATABASE_URL);
    // Fetch the row with id=1
    const result = await sql`SELECT data FROM site_config WHERE id = 1`;

    if (result.length === 0) {
      return {
        statusCode: 200,
        body: JSON.stringify({}), // Return empty obj if no config yet
      };
    }

    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(result[0].data),
    };
  } catch (error) {
    console.error("DB Error:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Database error: " + error.message }),
    };
  }
};
