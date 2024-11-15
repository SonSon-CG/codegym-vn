let content = ""
for (let i = 1; i <= 10; i++) {
    content += `<tr>`
    for (let j = 1; j <= 10; j++) {
    content += `<td> ${i} x ${j} = ${i*j}  </td>`
    }
    content += `<tr>`
}
document.getElementById("content").innerHTML=content

