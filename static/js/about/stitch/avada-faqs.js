jQuery(document).on("ready fusion-element-render-fusion_faq",function(a,b){
    (void 0!==b?jQuery('div[data-cid="'+b+'"]').find(".fusion-faq-shortcode"):jQuery(".fusion-faq-shortcode")).each(function(){
        var a,b,c,d,e=jQuery(this),f=e.find(".fusion-filters");e.find(".fusion-faqs-wrapper").fadeIn(),f.length&&(f.fadeIn(),a=f.find(".fusion-filter"),b=f.find(".fusion-active").children("a"),c=b.attr("data-filter").substr(1),d=jQuery(this).find(".fusion-faqs-wrapper .fusion-faq-post"),a&&a.each(function(){
            var a=jQuery(this),b=a.children("a").data("filter");d&&(c.length&&d.hide(),d.each(function(){
                var d=jQuery(this);
                d.hasClass(b.substr(1))&&a.hasClass("fusion-hidden")&&a.removeClass("fusion-hidden"),c.length&&d.hasClass(c)&&d.show()
            }))
        })),
        e.find(".fusion-filters a").click(function(a){
            var b=jQuery(this).attr("data-filter");
            a.preventDefault(),e.find(".fusion-faqs-wrapper .fusion-faq-post").fadeOut(),setTimeout(function(){
                e.find(".fusion-faqs-wrapper .fusion-faq-post"+b).fadeIn()
            },
            400),jQuery(this).parents(".fusion-filters").find(".fusion-filter").removeClass("fusion-active"),jQuery(this).parent().addClass("fusion-active")
        })
    })
});