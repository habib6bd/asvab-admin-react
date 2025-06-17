// app/api/login/route.ts

export async function POST(req: Request) {
  try {
    const bodyText = await req.text(); // get raw form body
    console.log('Forwarding login request body:', bodyText);

    const res = await fetch('https://test-prep.asvab-tutoring.com/practice-test/asvab-api.php', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
      },
      body: bodyText,
    });

    const data = await res.json();
    console.log('Response from actual API:', data);

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });

  } catch (error) {
    console.error('Error calling PHP API:', error);
    return new Response(JSON.stringify({ status: 'error', message: 'Login failed' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
