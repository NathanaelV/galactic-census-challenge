let result = document.getElementById('result');

async function printData() {
    let res = await fetch('https://swapi.dev/api/planets');

    let {results} = await res.json();
    // console.log(results)

    results.forEach(planet => {
        let li = document.createElement('li');
        li.innerHTML = planet.name
        result.appendChild(li);
    });
}