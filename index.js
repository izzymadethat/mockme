document.addEventListener("DOMContentLoaded", () => {
    const submitButton = document.getElementById("memeSubmit");
    const sbImage = document.getElementById("spongebob");
    const resultText = document.getElementById("result");
    const memeInput = document.getElementById("meme-input");

    submitButton.addEventListener("click", (event) => {
        event.preventDefault()

        const userInput = memeInput.value

        if (userInput) {
            const result = memeize(userInput)
            resultText.textContent = result;
            sbImage.innerHTML = `<img src="https://th.bing.com/th/id/R.62224f3ff282bbc60bdb0bb4bc88f566?rik=CpbcekoEwPQlLw&riu=http%3a%2f%2fimages.complex.com%2fcomplex%2fimages%2fc_fill%2cg_center%2cw_1200%2ffl_lossy%2cpg_1%2cq_auto%2fbujewhyvyyg08gjksyqh%2fspongebob&ehk=4CnKxXioMpI9QHbLq9avRDsSfc3kbWocHHmIxbLNxmQ%3d&risl=&pid=ImgRaw&r=0" alt="SpongeBob Image" />`; // Add SpongeBob image to the div
        }
    })

    const memeize = str => {
        // console.log(fullString)
        let string = ''
        for (let i = 0; i < str.length; i++) {
            let letter = str[i]
            let index = i

            if (index % 2 === 0) {
                let upper = letter.toUpperCase()
                string += upper
            } else {
                string += letter
            }

        }
        return string
    }
})
