(function () {
    const SliderInit = () => {
        const item = $(".app_slider .item");
        const item_prev = $(".item_prev");
        const item_next = $(".item_next");
        const item_prev_lesson = $(".item_prev_lesson");
        const item_next_lesson = $(".item_next_lesson");

        const opts = {
            _prev: "prev",
            _next: "next",
            _in_left: "in_left",
            _in_right: "in_right",
            _in_center: "in_center",
            _disable: "is_disable",
            _spam: 0,
        };

        const hanldeState = (e = opts._next) => {
            const in_center = $(".in_center");
            in_center.removeClass(opts._in_center);
            if (e == opts._next) {
                const next = in_center.next();
                if (next.index() == item.length - 1) {
                    item_next.addClass(opts._disable);
                    item_next_lesson.removeClass(opts._disable);
                }
                item_prev_lesson.addClass(opts._disable);
                item_prev.removeClass(opts._disable);
                next.addClass(opts._in_center);
                next.addClass(opts._in_right);
                setTimeout(function () {
                    next.removeClass(opts._in_right);
                    opts._spam = 0;
                }, 500);
            } else {
                const prev = in_center.prev();
                if (prev.index() == 0) {
                    item_prev.addClass(opts._disable);
                    item_prev_lesson.removeClass(opts._disable);
                }
                item_next.removeClass(opts._disable);
                item_next_lesson.addClass(opts._disable);
                prev.addClass(opts._in_center);
                prev.addClass(opts._in_left);
                setTimeout(function () {
                    prev.removeClass(opts._in_left);
                    opts._spam = 0;
                }, 500);
            }
        };

        item_prev.on("click", function () {
            if (!opts._spam) {
                opts._spam = 1;
                hanldeState(opts._prev);
            }
        });
        item_next.on("click", function () {
            if (!opts._spam) {
                opts._spam = 1;
                hanldeState();
            }
        });
    };
    SliderInit();
})();
