(function () {
    const FnAppendInit = () => {
        const p = $("#fn_append .p"),
            btn_reset = $("#fn_append .btn_reset"),
            btn_run = $("#fn_append .btn_run");

        const _default = {
            txt: p.text(),
        };

        btn_reset.on("click", function () {
            p.text(_default.txt);
        });
        btn_run.on("click", function () {
            p.append("<h4>hihi</h4>");
        });
    };
    FnAppendInit();

    const FnHTMLInit = () => {
        const target = $("#fn_html .target"),
            target_val = $("#fn_html .target_val"),
            btn_reset = $("#fn_html .btn_reset"),
            btn_run = $("#fn_html .btn_run"),
            btn_set = $("#fn_html .btn_set");

        const _default = {
            txt: target.html(),
        };

        btn_reset.on("click", function () {
            target.html(_default.txt);
            target_val.text("");
        });
        btn_run.on("click", function () {
            const val = target.html();
            target_val.text(val);
        });
        btn_set.on("click", function () {
            target.html("<h4>hihi</h4>");
        });
    };
    FnHTMLInit();

    const FnTextInit = () => {
        const target = $("#fn_text .target"),
            target_val = $("#fn_text .target_val"),
            btn_reset = $("#fn_text .btn_reset"),
            btn_run = $("#fn_text .btn_run"),
            btn_set = $("#fn_text .btn_set");

        const _default = {
            txt: target.eq(0).text(),
        };

        btn_reset.on("click", function () {
            target.text(_default.txt);
            target_val.text("");
        });
        btn_run.on("click", function () {
            const val = target.text();
            target_val.text(val);
        });
        btn_set.on("click", function () {
            target.text("hihi");
        });
    };
    FnTextInit();

    const FnValInit = () => {
        const target = $("#fn_val .target"),
            target_val = $("#fn_val .target_val"),
            btn_reset = $("#fn_val .btn_reset"),
            btn_run = $("#fn_val .btn_run"),
            btn_set = $("#fn_val .btn_set");

        btn_reset.on("click", function () {
            target.val("");
            target_val.text("");
        });
        btn_run.on("click", function () {
            const val = target.val();
            target_val.text(val);
        });
        btn_set.on("click", function () {
            target.val("hihi");
        });
    };
    FnValInit();

    const FnAttrInit = () => {
        const target = $("#fn_attr .target"),
            target_val = $("#fn_attr .target_val"),
            btn_reset = $("#fn_attr .btn_reset"),
            btn_run = $("#fn_attr .btn_run"),
            btn_set = $("#fn_attr .btn_set");

        const _default = {
            attr: target.eq(0).attr("href"),
        };
        btn_reset.on("click", function () {
            target.attr("href", _default.attr);
            target_val.text("");
        });
        btn_run.on("click", function () {
            const val = target.attr("href");
            target_val.text(val);
        });
        btn_set.on("click", function () {
            target.attr("href", "hihi");
        });
    };
    FnAttrInit();

    const FnARClassInit = () => {
        const target = $("#fn_arclass .target"),
            btn_reset = $("#fn_arclass .btn_reset"),
            btn_run = $("#fn_arclass .btn_run"),
            btn_set = $("#fn_arclass .btn_set");

        const _default = {
            attr: target.eq(0).attr("class"),
        };
        btn_reset.on("click", function () {
            target.attr("class", _default.attr);
        });
        btn_run.on("click", function () {
            target.addClass("red font-40px");
        });
        btn_set.on("click", function () {
            target.removeClass("red");
        });
    };
    FnARClassInit();

    const FnAnimateInit = () => {
        const target = $("#fn_animate .target"),
            btn_reset = $("#fn_animate .btn_reset"),
            btn_run = $("#fn_animate .btn_run"),
            btn_set = $("#fn_animate .btn_set");

        const _default = {
            width: target.eq(0).innerWidth(),
            height: target.eq(0).innerHeight(),
        };
        btn_reset.on("click", function () {
            target.animate(
                {
                    width: _default.width,
                    height: _default.height,
                },
                450
            );
        });
        btn_run.on("click", function () {
            target.animate(
                {
                    width: 160,
                },
                450
            );
        });
        btn_set.on("click", function () {
            target.animate(
                {
                    height: 160,
                },
                450
            );
        });
    };
    FnAnimateInit();

    const FnSUSDInit = () => {
        const target = $("#fn_susd .target"),
            btn_reset = $("#fn_susd .btn_reset"),
            btn_run = $("#fn_susd .btn_run"),
            btn_set = $("#fn_susd .btn_set");

        btn_reset.on("click", function () {
            target.slideDown(450);
        });
        btn_run.on("click", function () {
            target.slideUp(450);
        });
        btn_set.on("click", function () {
            target.slideDown(450);
        });
    };
    FnSUSDInit();

    const FnEQINInit = () => {
        const target = $("#fn_eqin .target"),
            target_eq = $("#fn_eqin .target_eq"),
            target_index = $("#fn_eqin .target_index"),
            btn_reset = $("#fn_eqin .btn_reset"),
            btn_run = $("#fn_eqin .btn_run"),
            btn_set = $("#fn_eqin .btn_set");

        btn_reset.on("click", function () {
            target_eq.text("");
            target_index.text("");
        });
        btn_run.on("click", function () {
            const eq = target.eq(3);
            console.log(eq[0].outerHTML);
            target_eq.text(eq[0].outerHTML);
        });
        btn_set.on("click", function () {
            let i = -1;
            target.map((a, b) => {
                if ($(b).text() == "Thứ 6") i = a;
            });
            if (i != -1) {
                target_index.text(i);
            }
        });
    };
    FnEQINInit();
})();
