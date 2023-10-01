const toggleBtn = document.querySelector('.home-navbar-toggle-btn')
const toggleBtnIcon = document.querySelector('.home-navbar-toggle-btn i')
const dropDownMenu = document.querySelector('.home-dropdown-menu')

toggleBtn.onclick = function () 
{   homeBanner = this.getElementsByClassName('home-banner')
    dropDownMenu.classList.toggle('open')
    const isOpen = dropDownMenu.classList.contains('open')
    toggleBtnIcon.classList = isOpen 
    ? 'bx bx-x'
    : 'bx bx-menu' 
}