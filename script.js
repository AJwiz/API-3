// https://programming-quotes-api.herokuapp.com/quotes
function ele(tagname, atname, atvalue) {
    let element = document.createElement(tagname);
    element.setAttribute(atname, atvalue);
    return element;
}
let container = ele("div", "class", "container");
let head = ele("h1", "class", "head");
head.innerHTML = `Simple Programming Quotes`;
let ul = ele("ul", "class", "cards");

async function pro() {
    let getApi = await fetch(`https://programming-quotes-api.herokuapp.com/quotes`);
    let getJson = await getApi.json();
    console.log(getJson);
    for (let i = 0; i < 50; i++) {
        let arr = getJson.filter((ele) => ele[i] != 51);
        console.log(arr);
        ul.innerHTML += `
                <li class="card">
                    <div>
                        <h3 class="card-title">Quote${(i + 1)}</h3>
                        <div class="card-content">
                            <p>${getJson[i].en}</p>
                        </div>
                    </div>
                    <div class="card-link-wrapper">
                        <cite class="card-link">${getJson[i].author}</cite>
                    </div>
                </li>`
    }
}
pro();
container.append(head, ul);
document.body.append(container);