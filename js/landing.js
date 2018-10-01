/*! landing.js | Bulkit | CSS Ninja */

/* ==========================================================================
Landing kit 1 JS file 
========================================================================== */

$(document).ready(function ($) {

    "use strict";

    //Toggle the sign up button color when solid navbar comes in
    if ($('.navbar-light').length) {
        $(window).on('scroll', function () {    // this will work when your window scrolled.
            var height = $(window).scrollTop();  //getting the scrolling height of window
            if (height > 80) {
                $('.button-signup').removeClass('light-btn').addClass('primary-btn');
            } else {
                $('.button-signup').removeClass('primary-btn').addClass('light-btn');
            }
        });
    }

    //Pricing switch
    $('.pricing-picker span').on("click", function () {
        $('.pricing-picker span.is-active').removeClass('is-active');
        $(this).addClass('is-active');
    })

    $('.sign-up-button-nav').on("click", function () {
        analytics.track("Clicked 'Get Started' in Nav", {
            location: 'header-nav',
            type: 'button'
        });
    })

    $('.sign-up-button-hero').on("click", function () {
        analytics.track("Clicked 'Get Started' in Hero", {
            location: 'hero',
            type: 'button'
        });
    })

    $('.get-started-coach-features-landing').on("click", function () {
        analytics.track("Clicked 'Get Started'", {
            location: 'landing-page-coaches-features',
            type: 'button'
        });
    })

    $('.see-pricing-button-landing-bottom').on("click", function () {
        analytics.track("Clicked 'See Pricing'", {
            location: 'landing-page-footer',
            type: 'button'
        });
    })

    //show monthly pricing
    $('#show-monthly').on("click", function () {
        $('.per-year').addClass('is-hidden');
        $('.per-month').removeClass('is-hidden');

        analytics.track("Clicked 'Monthly' Pricing Filter", {
            location: 'Pricing',
            type: 'button'
        });
    })
    //show yearly pricing
    $('#show-yearly').on("click", function () {
        $('.per-month').addClass('is-hidden');
        $('.per-year').removeClass('is-hidden');
        analytics.track("Clicked 'Yearly' Pricing Filter", {
            location: 'Pricing',
            type: 'button'
        });
    })

    $('.sign-up-button-pricing').on("click", function () {
        var isPerMonth = $('.per-month').is(":visible");
        var pricingTier = $(this).attr('data-pricing-tier');

        analytics.track("Clicked 'Sign Up'", {
            location: 'Pricing',
            planType: isPerMonth ? 'Monthly' : "Yearly",
            pricingTier: pricingTier
        });
    })

    //Scroll reveal definitions
    // Declaring defaults
    window.sr = ScrollReveal();

    // Simple reveal
    sr.reveal('.is-title-reveal', {
        origin: 'bottom',
        distance: '20px',
        duration: 600,
        delay: 100,
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        scale: 1,
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        container: window.document.documentElement,
        mobile: true,
        reset: false,
        useDelay: 'always',
        viewFactor: 0.2,

    });

    // Left reveal
    sr.reveal('.is-left-reveal', {
        origin: 'left',
        distance: '20px',
        duration: 500,
        delay: 150,
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        scale: 1,
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        container: window.document.documentElement,
        mobile: true,
        reset: false,
        useDelay: 'always',
        viewFactor: 0.4,

    });

    // Right reveal
    sr.reveal('.is-right-reveal', {
        origin: 'right',
        distance: '20px',
        duration: 500,
        delay: 150,
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        scale: 1,
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        container: window.document.documentElement,
        mobile: true,
        reset: false,
        useDelay: 'always',
        viewFactor: 0.4,

    });

    // Revealing multiple icons
    sr.reveal('.is-icon-reveal', {
        origin: 'bottom',
        distance: '20px',
        duration: 600,
        delay: 100,
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        scale: 1,
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        container: window.document.documentElement,
        mobile: true,
        reset: true,
        useDelay: 'always',
        viewFactor: 0.2,

    }, 100);

    // Revealing multiple posts
    sr.reveal('.is-post-reveal', {
        origin: 'bottom',
        distance: '20px',
        duration: 600,
        delay: 100,
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        scale: 1,
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        container: window.document.documentElement,
        mobile: true,
        reset: false,
        useDelay: 'always',
        viewFactor: 0.2,

    }, 160);

    // Revealing multiple cards
    sr.reveal('.is-card-reveal', {
        origin: 'bottom',
        distance: '20px',
        duration: 600,
        delay: 100,
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        scale: 1,
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        container: window.document.documentElement,
        mobile: true,
        reset: false,
        useDelay: 'always',
        viewFactor: 0.2,

    }, 160);

    // Revealing multiple dots
    sr.reveal('.is-dot-reveal', {
        origin: 'bottom',
        distance: '20px',
        duration: 600,
        delay: 100,
        rotate: { x: 0, y: 0, z: 0 },
        opacity: 0,
        scale: 1,
        easing: 'cubic-bezier(0.215, 0.61, 0.355, 1)',
        container: window.document.documentElement,
        mobile: true,
        reset: true,
        useDelay: 'always',
        viewFactor: 0.2,

    }, 160);

})