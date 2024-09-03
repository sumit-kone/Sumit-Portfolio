// ==========   Scroll Section Active Link  =============

let sections=document.querySelectorAll( 'section' );
let navLinks=document.querySelectorAll( 'header nav a' );

window.onscroll=() =>
{
     sections.forEach( sec =>
     {
          let top=window.scrollY;
          let offset=sec.offsetTop-150;
          let height=sec.offsetHeight;
          let id=sec.getAttribute( 'id' );
          // console.log( `TOP : ${ top }  \n ` )
          // console.log( `Offset : ${ offset }  \n ` )
          // console.log( `Height : ${ height }  \n ` )
          // console.log( `ID : ${ id }  \n ` )

          if ( top>=offset&&top<offset+height )
          {
               navLinks.forEach( links =>
               {
                    links.classList.remove( 'active' );
                    document.querySelector( 'header nav a[href*='+id+']' ).classList.add( 'active' );
               } )
          }

     } );
     // ==========   Sticky Navbar   =============
     let header=document.querySelector( 'header' );
     header.classList.toggle( 'sticky', window.scrollY>100 );

}


// =============  Toggle Navbar ==================
let section=document.querySelector( 'section' );
let body=document.querySelector( 'body' );
let menuIcon=document.querySelector( '.menu-icon' );
let navbar=document.querySelector( '.navbar' );

menuIcon.addEventListener( 'click', ( e ) =>
{
     sections.forEach( section =>
     {
          section.classList.toggle( 'blur' )
     } )
     menuIcon.classList.toggle( 'bx-menu-alt-right' );
     menuIcon.classList.toggle( 'uil-multiply' );
     navbar.classList.toggle( 'active' );
} )

// ============  Scroll Reveal =====================
ScrollReveal( {
     reset: false,
     distance: '80px',
     duration: 1000,
     delay: 200
} );


ScrollReveal().reveal( '.home-content-left,.heading,.header', { origin: 'top' } );
ScrollReveal().reveal( '.home-img ,.service-container, .portfolio-container , .contact-form', { origin: 'bottom' } );
ScrollReveal().reveal( '.home-content-left h1, .about-img', { origin: 'left' } );
ScrollReveal().reveal( '.home-content-left p, .about-content', { origin: 'right' } );

// ============  typed js ===============
const typed=new Typed( '.multiple-text', {
     strings: [ 'Coder', 'Youtuber', 'UPSE Dreamer', 'Blogger' ],
     typeSpeed: 100,
     backSpeed: 100,
     loop: true
} );
