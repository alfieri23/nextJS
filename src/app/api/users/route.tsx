
// GET Users
export async function GET() {
    const res = await fetch('https://jsonplaceholder.typicode.com/users');
    //console.log(res);

    const data = await res.json();

    // return new Response(JSON.stringify(data), {
    //     headers: { 'Content-Type': 'application/json'}
    // });

    //return Response.json(data)
    console.log("Data api", data);
    Response.json(data)

};
