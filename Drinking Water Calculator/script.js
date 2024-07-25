const smallGlass = document.querySelectorAll('.small-glass')
const liters = document.querySelector('.liters')
const percentage = document.querySelector('.percentage')
const remaining = document.querySelector('.remaining')

updateBigGlass()
 smallGlass.forEach((cup, idx) => {
    cup.addEventListener('click', () => highlightGlass(idx))
})

function highlightGlass(idx) {

    if (idx === 7 && smallGlass[idx].classList.contains("full")) 
    {
        idx--;
    }
    else if  (smallGlass[idx].classList.contains('full') &&  smallGlass[idx].nextElementSibling.classList.contains('full')){
        idx--;
    }

 smallGlass.forEach((cup, idx2) => {
        if (idx2 <= idx) {
            cup.classList.add('full')
        }else{
            cup.classList.remove('full')
        }
    })
      updateBigGlass()
}

function updateBigGlass(){
    const fullGlass = document.querySelectorAll('.small-glass.full').length
    const totalGlass = smallGlass.length

    if (fullGlass === 0){
        percentage.style.visibility = 'hidden'
        percentage.style.height = 0
    } else {
        percentage.style.visibility = 'visible'
        percentage.innertext = `${fullGlass / totalGlass * 100}%`
        percentage.style.height = `${fullGlass / totalGlass * 345}px`
    }

    if (fullGlass === totalGlass){
        remaining.style.visibility = 'hidden'
        remaining.style.height = 0
    } else {
        remaining.style.visibility = 'visible'
        liters.innerText =`${4 - (250 * fullGlass / 1000)}L`
    }
}1234567