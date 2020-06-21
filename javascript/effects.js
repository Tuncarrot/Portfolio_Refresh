$('#about-me-pointer').on('mouseenter mouseleave', function(e) {
    $('#about-me-collection').trigger(e.type);
})