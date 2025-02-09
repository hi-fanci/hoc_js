(function () {
    const html = $("html");

    //
    const app_opts = {
        _is_active: "is_active",
        _is_open: "is_open",
        _is_show: "is_show",
        _prev_pos: "prev_pos",
        _goto_in_next_page: "goto-in-next-page",
    };
    const AppInit = () => {
        const PrevPosInit = () => {
            let _timeout;

            $(window).on("load scroll", function () {
                clearTimeout(_timeout);
                _timeout = setTimeout(function () {
                    const { scrollY: y } = window;
                    localStorage.setItem(page_name, y);
                }, 160);
            });

            $(window).on("load", function () {
                const target_id = localStorage.getItem(
                    app_opts._goto_in_next_page
                );
                if (target_id) {
                    const target = $(target_id);
                    if (target.length > 0) {
                        const { top } = target.offset();
                        html.animate(
                            {
                                scrollTop: top - 48,
                            },
                            600,
                            function () {
                                localStorage.removeItem(
                                    app_opts._goto_in_next_page
                                );
                            }
                        );
                    }
                } else {
                    let _prev_pos = localStorage.getItem(page_name);

                    if (_prev_pos) {
                        const { scrollY: y } = window;
                        if ((y > +_prev_pos - 200) & (y < +_prev_pos + 200))
                            return;

                        const app_last_pos = $(".app_last_pos");
                        const app_last_pos_mask = $(".app_last_pos_mask");
                        const app_last_pos_btn = $(".app_last_pos_btn");
                        const app_last_pos_close = $(".app_last_pos_close");

                        html.css({
                            overflow: "hidden",
                        });
                        app_last_pos.addClass(app_opts._is_show);

                        app_last_pos_btn.on("click", function () {
                            app_last_pos.remove();
                            html.css({
                                overflow: "",
                            });
                            html.animate(
                                {
                                    scrollTop: +_prev_pos,
                                },
                                600
                            );
                        });

                        app_last_pos_close.on("click", function () {
                            app_last_pos.remove();
                            html.css({
                                overflow: "",
                            });
                        });
                        app_last_pos_mask.on("click", function () {
                            app_last_pos.remove();
                            html.css({
                                overflow: "",
                            });
                        });
                    }
                }
            });
        };
        PrevPosInit();

        const MenuInit = () => {
            const menu = $(".app_menu");
            const menu_link = $(".app_menu_link");
            const menu_open = $(".app_menu_open");
            const menu_mask = $(".app_menu_mask");

            const hanldeMenuToggle = (e = 1) => {
                if (e) {
                    // close
                    menu.removeClass(app_opts._is_open);
                    html.css({
                        overflow: "",
                        "padding-right": "0",
                    });
                } else {
                    // open
                    html.css({
                        overflow: "hidden",
                        "padding-right": "10px",
                    });
                    menu.addClass(app_opts._is_open);
                }
            };
            menu_mask.on("click", function () {
                hanldeMenuToggle();
            });

            menu_open.on("click", function () {
                hanldeMenuToggle(0);
            });
            menu_link.on("click", function (e) {
                const target_id = $(this).attr("href");
                const target = $(target_id);
                if (target.length > 0) {
                    menu_link.removeClass(app_opts._is_open);
                    $(this).addClass(app_opts._is_open);
                    hanldeMenuToggle();
                    const { top } = target.offset();

                    html.animate(
                        {
                            scrollTop: top - 48,
                        },
                        400
                    );
                }
                return false;
            });

            let _timeout;
            $(window).on("load scroll", function () {
                clearTimeout(_timeout);
                _timeout = setTimeout(function () {
                    const { scrollY: y, innerHeight: wh } = window;
                    menu_link.removeClass(app_opts._is_open);
                    menu_link.map((a, b) => {
                        const target_id = $(b).attr("href");
                        const target = $(target_id);
                        if (target.length > 0) {
                            const { top } = target.offset();
                            const bottom = target.innerHeight();
                            if (
                                top + bottom > y + wh * 0.5 &&
                                top < y + wh * 0.5
                            ) {
                                $(b).addClass(app_opts._is_open);
                            }
                        }
                    });
                }, 160);
            });
        };
        MenuInit();

        const GotoInit = () => {
            const js_goto = $(".js_goto");
            js_goto.on("click", function () {
                const target_id = $(this).attr("href");
                const target = $(target_id);
                if (target.length > 0) {
                    const { top } = target.offset();
                    html.animate(
                        {
                            scrollTop: top - 48,
                        },
                        600
                    );
                }
            });
        };
        GotoInit();

        const GotoInNextPage = () => {
            const goto_in_next_page = $(".js_goto_in_next_page");
            goto_in_next_page.on("click", function () {
                const target = $(this).attr("data-id");
                localStorage.setItem(app_opts._goto_in_next_page, target);
            });
        };
        GotoInNextPage();
    };
    AppInit();
})();
