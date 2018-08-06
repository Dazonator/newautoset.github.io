window.requestAnimationFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame ||
    window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || false;

var View = new (function () {
    var body = $(document.body);
    var htmlbody = $([document.documentElement, document.body]);
    var win = $(window);


    // проверка на мобильное устройство
    this.mobileAndTabletCheck = (function () {
        var check = false;
        (function (a) {
            if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true
        })(navigator.userAgent || navigator.vendor || window.opera);
        return check;
    })();


    // ширина полосы прокрутки (инициализируется потом)
    this.scrollBarWidth = null;


    this.control = {
        // открыть мобильное меню
        openMainMenu: function () {
            body.addClass('main-menu-open');
            this.closeAllDropdowns();
        },

        // закрыть мобильное меню
        closeMainMenu: function () {
            body.removeClass('main-menu-open');
        },

        // открыть выпадающее меню
        openDropdown: function (dropdown, dropdownBtn, dropdownBody, related) {
            this.closeAllDropdowns(dropdown, dropdownBtn, dropdownBody);

            dropdown.addClass('open');
            dropdownBtn.addClass('open');
            dropdownBody.addClass('open');

            View.control.closeAllSelects();

            View.currentOpenDropdownBtn = dropdownBtn;

            $('.js-close-click-out').removeClass('open');

            if (related)
                $('.js-dropdown[data-dropdown-rel="' + related + '"]').addClass('related-open');

            if (dropdown.hasClass('js-dropdown__main-menu')) {
                body.addClass('main-menu-open');
                clearTimeout(View.control.mainMenuOpenTimeout);
                View.control.mainMenuOpenTimeout = setTimeout(function () {
                    body.addClass('main-menu-open-stop')
                }, 500);
            }
        },

        // закрыть выпадающее меню
        closeDropdown: function (dropdown, dropdownBtn, dropdownBody, related) {
            dropdown.removeClass('open');
            dropdownBtn.removeClass('open');
            dropdownBody.removeClass('open');

            View.currentOpenDropdownBtn = null;

            if (related)
                $('.js-dropdown[data-dropdown-rel="' + related + '"]').removeClass('related-open');

            if (dropdown.hasClass('js-dropdown__main-menu')) {
                body.removeClass('main-menu-open')
                clearTimeout(View.control.mainMenuOpenTimeout);
                View.control.mainMenuOpenTimeout = setTimeout(function () {
                    body.removeClass('main-menu-open-stop')
                }, 500);
            }
        },

        // закрыть все выпадающие меню (кроме @except*). exceptOptions = 'except-mouseover' - закрыть все, кроме того, который под курсором
        closeAllDropdowns: function (exceptDropdown, exceptBnt, exceptBody, exceptOptions) {
            var otherDropdowns = $('.js-dropdown');
            var otherDropdownBtns = $('.js-dropdown__btn');
            var otherDropdownBodys = $('.js-dropdown__body');

            if (exceptDropdown)
                otherDropdowns = otherDropdowns.not(exceptDropdown);
            if (exceptBnt)
                otherDropdownBtns = otherDropdownBtns.not(exceptBnt);
            if (exceptBody)
                otherDropdownBodys = otherDropdownBodys.not(exceptBody);

            if (exceptOptions === 'except-mouseover') {
                otherDropdowns = otherDropdowns.not(otherDropdownBtns.add(otherDropdownBodys).filter(':hover').closest('.js-dropdown'));
                otherDropdownBtns = otherDropdowns.find('.js-dropdown__btn');
                otherDropdownBodys = otherDropdowns.find('.js-dropdown__body');
            }


            otherDropdowns.removeClass('related-open');

            this.closeDropdown(otherDropdowns, otherDropdownBtns, otherDropdownBodys);

            $('.js-dropdown__btn').removeClass('closed');
        },

        closeAllSelects: function () {
            var openSelects = $('.js-select-visual.open');
            if (openSelects.length)
                openSelects.removeClass('open');
        },

        // загрузить и открыть попап
        openModalByUrl: function(url, callback) {
            if(typeof url !== 'string') {
                console.warn('View.control.openModalByUrl error: url is not a string', url);
                return false;
            }

            body.find('.js-modal-container').remove();
            body.append('<div class="modal-container js-modal-container"></div>');
            body.addClass('modal-loading');
            $('.js-modal-container').load(url, function(data, status, xhr) {
                if(typeof callback === 'function')
                    callback({status: status});

                if(status == 'error')
                    console.warn('View.control.openModalByUrl error: ' + xhr.status + ' ' + xhr.statusText);

                if(status == 'success') {
                    View.control.openModal($('.js-modal-container .js-modal'))
                }
            });
        },

        openModalWithIframe: function(options) {
            if(typeof options == 'undefined') {
                console.warn('View.control.openModalWithIframe error: options is undefined', url);
                return false;
            }

            body.find('.js-modal-container').remove();
            body.append('<div class="modal-container js-modal-container"></div>');
            body.addClass('modal-loading');

            $('.js-modal-container').append('<div class="modal modal--video js-modal">' +
                '<button type="button" class="modal__close js-close-modal"></button>' +
                (options.content ? options.content :
                    ('<div class="video-block">' +
                    '<iframe src="'+options.src+'" allowfullscreen></iframe>' +
                    '</div>')) +
                '</div>');

            setTimeout(function() {
                View.control.openModal($('.js-modal-container .js-modal'))
            }, 0);
        },

        // открыть попап
        openModal: function(modal) {
            this.closeAll();

            var modal = $(modal);

            modal.addClass('open loading');
            body.addClass('modal-open overlay-open');

            var modalHeight = modal.outerHeight();
            var winHeight = win.height();
            var winScrollTop = win.scrollTop();
            var offsetParent = modal.offsetParent();

            // if(!offsetParent.is('body'))
            //  winScrollTop -= offsetParent.offset().top;

            var modalTop = modalHeight > winHeight ? winScrollTop + 50 : winScrollTop + (winHeight - modalHeight) / 2;
            if(modalTop + modalHeight + 300 > body.height()) {
                modalTop = body.height() - modalHeight - 300;
                htmlbody.animate({scrollTop: modalTop - 50}, Math.abs(modalTop - winScrollTop));
            }

console.log(modalTop);
            modal.css('top', modalTop);

            var modalSlider = modal.find('.js-modal-image-slider');
            if(modalSlider.length) {
                modalSlider.slick({
                    dots: false,
                    arrows: true,
                    infinite: true
                });
            }

            setTimeout(function() {
                modal.removeClass('loading');
                body.removeClass('modal-loading');
            }, 0);
        },

        // закрыть попап
        closeModal: function() {
            body.removeClass('modal-open modal-loading overlay-open');
            $('.js-modal.open').removeClass('open');
            setTimeout(function() {
                $('.js-modal:not(.open) iframe').remove();
            }, 300);
        },

        // закрыть все что открывается
        closeAll: function () {
            this.closeAllDropdowns();
            this.closeMainMenu();
            this.closeModal();
            $('#fancybox-close').trigger('click');
            $('.js-sidebar-close').trigger('click');
        }
    },


        this.init = {
            global: {

                // инициализация селектов
                selects: function () {
                    body.off('recalcSelectAutoWidth', '.js-select').on('recalcSelectAutoWidth', '.js-select', function () {
                        var select = $(this);
                        var selectVisual = select.closest('.js-select-visual');
                    });

                    body.off('click.select', '.js-select-visual .select-list li')
                        .on('click.select', '.js-select-visual .select-list li', function () {
                            var t = $(this);
                            var visual = t.closest('.js-select-visual');
                            var select = visual.find('select');

                            select.val(t.attr('data-value')).trigger('change');
                        });

                    body.off('click.openSelect', '.js-select-visual').on('click.openSelect', '.js-select-visual', function () {
                        if (View.mobileAndTabletCheck) return;

                        var t = $(this);

                        $('.js-select-visual.open').not(t).removeClass('open');
                        t.toggleClass('open');
                        View.control.closeAllDropdowns();

                    });

                    body.off('change.changeSelectVisual', '.js-select').on('change.changeSelectVisual', '.js-select', function () {
                        var select = $(this);
                        var visual = select.closest('.js-select-visual');
                        var value = visual.find('.js-select-value');
                        var activeOption = visual.find('li[data-value="' + select.val() + '"]').addClass('active');
                        activeOption.siblings().removeClass('active');
                        visual.removeClass('placeholder-state');

                        value.html(activeOption.html());
                    });

                    body.off('keyup.accessibilityClick', '.js-select-visual, .js-select-visual li')
                        .on('keyup.accessibilityClick', '.js-select-visual, .js-select-visual li', function (e) {
                            if (e.which == 13 || e.which == 32)
                                $(this).trigger('click');
                        });

                    body.off('click.closeSelects').on('click.closeSelects', function (e) {
                        var target = $(e.target);

                        if (target.closest('.js-select-visual, select').length === 0) {
                            $('.js-select-visual.open').removeClass('open');
                        }
                    });


                    body.off('change.changeContentOnChange', 'select.js-select-for-content')
                        .on('change.changeContentOnChange', 'select.js-select-for-content', function () {
                            var t = $(this);
                            var wrap = t.closest('.js-select-for-content-wrap');

                            wrap.find('.js-selectable-content').hide();
                            wrap.find('.js-selectable-content[data-select-val="' + t.val() + '"]').show();
                        });


                    body.off('change.changeContentOnChange', 'select.js-select--click')
                        .on('change.changeContentOnChange', 'select.js-select--click', function () {
                            var t = $(this);
                            var group = t.closest('.js-select-click-group');

                            group.find('.js-select-click-item[data-select-click="' + t.val() + '"]').trigger('click');
                        });


                    body.off('updateSelect', 'select.js-select')
                        .on('updateSelect', 'select.js-select', function () {
                            $(this).trigger('change.changeSelectVisual').trigger('recalcSelectAutoWidth');
                        });
                },


                // вкладки
                tabs: function () {
                    var tabsAnimateTimeout;

                    body.off('click.openTab', '.js-tabs__label').on('click.openTab', '.js-tabs__label', function (e) {
                        var t = $(this);

                        if (t.hasClass('open'))
                            return;

                        var tabID = t.attr('data-tab') || t.attr('href');
                        var tabs = t.closest('.js-tabs');
                        var tab = tabs.find('.js-tabs__tab[data-tab="' + tabID + '"]');
                        var prevTab = tabs.find('.js-tabs__tab.open');

                        // переключение вкладок
                        tabs.find('.js-tabs__tab, .js-tabs__label').not(tabs.find('.js-tabs .js-tabs__tab, .js-tabs .js-tabs__label')).removeClass('open');
                        tab.addClass('open');
                        tabs.find('.js-tabs__label[data-tab="' + tabID + '"]').addClass('open');
                        tabs.find('.js-alt-tab-controller').not(tabs.find('.js-tabs .js-alt-tab-controller')).val(tabID).trigger('change.changeSelectVisual');

                        // корректировка блоков
                        if (tabs.find('.js-to-max-height, .js-inherit-height').length > 0) {
                            $(window).trigger('resize');
                        }

                        tabs.find('.slick-slider').slick('setPosition');

                        // подскролл к активной вкладке
                        if (tab[0].getBoundingClientRect().top < 0) {
                            htmlbody.animate({scrollTop: tab.offset().top - 100}, Math.min(-tab[0].getBoundingClientRect().top, 300));
                        }

                        // запоминать состояние вкладки
                        if (tabs.hasClass('js-tabs__use-hash')) {
                            if (history.pushState) {
                                history.pushState(null, null, '#' + tabID);
                            }
                            else {
                                location.hash = '#' + tabID;
                            }

                            e.preventDefault();
                        }

                        // опционально анимация вкладок
                        if (tabs.hasClass('js-tabs__animate')) {
                            clearTimeout(tabsAnimateTimeout);
                            stopTabsAnimation();

                            var container = tabs.find('.animatable-tabs-container, .js-animatable-tabs-container').addClass('animated');

                            prevTab.addClass('open');
                            tab.removeClass('open');

                            var prevTabHeight = prevTab.outerHeight();
                            var tabHeight = tab.outerHeight();

                            container.css('height', prevTabHeight).stop().animate({'height': tabHeight}, 750);


                            if (prevTab.index() < tab.index()) {
                                prevTab.addClass('tab-animate-left');
                                tab.addClass('tab-animate-right');
                            }
                            else {
                                prevTab.addClass('tab-animate-right');
                                tab.addClass('tab-animate-left');
                            }

                            setTimeout(function () {
                                prevTab.removeClass('open').addClass('tab-animate');
                                tab.addClass('open').addClass('tab-animate');
                            }, 50);

                            tabsAnimateTimeout = setTimeout(stopTabsAnimation, 1000);
                        }


                        function stopTabsAnimation() {
                            tabs.find('.js-tabs__tab').removeClass('tab-animate-left tab-animate-right tab-animate').css({
                                'margin-bottom': '',
                                'margin-top': '',
                                'height': ''
                            });
                            tabs.find('.js-animatable-tabs-container').removeClass('animated').css('height', '');
                        }
                        e.preventDefault();
                        return false;
                    });


                    // альтернативный способ переключения табов. Подходит всё, что имеет value и событие change
                    body.off('change.changeTab', '.js-alt-tab-controller').on('change.changeTab', '.js-alt-tab-controller', function () {
                        var t = $(this);
                        var tabs = t.closest('.js-tabs');

                        tabs.find('.js-tabs__tab, .js-tabs__label').removeClass('open');
                        tabs.find('.js-tabs__tab[data-tab="' + t.val() + '"], .js-tabs__label[data-tab="' + t.val() + '"]').addClass('open');

                        if (tabs.find('.js-to-max-height').length > 0) {
                            win.trigger('resize');
                        }

                        tabs.find('.slick-slider').slick('setPosition');
                    });


                    // переключать вкладку по клику на элемент внутри нее. Вызывает клик на js-tab-label, поэтому вкладки табов тоже переключатся
                    body.off('click.switchToTab', '.js-switch-to-tab').on('click.switchToTab', '.js-switch-to-tab', function () {
                        var t = $(this);

                        t.closest('.js-tabs').find('.js-tabs__label[data-tab="' + t.attr('data-tab') + '"]').trigger('click');
                    });


                    // переключние табов по хэшу url
                    $('.js-tabs--use-hash .js-tabs__label[data-tab="' + location.hash.slice(1) + '"]').trigger('click');
                },


                modal: function() {
                    body.off('click.openIframeModalOnClick', '.js-open-iframe-modal').on('click.openIframeModalOnClick', '.js-open-iframe-modal', function(e) {
                        e.preventDefault();

                        var t = $(this);

                        View.control.openModalWithIframe({
                            src: t.attr('data-iframe-src') || t.attr('href')
                        });

                        return false;
                    });


                    body.off('click.closeModalOnClick', '.js-close-modal').on('click.closeModalOnClick', '.js-close-modal', function() {
                        View.control.closeModal();
                    });
                },

                modalByUrl: function() {
                    body.off('click.openIframeModalOnClick', '.js-open-modal').on('click.openIframeModalOnClick', '.js-open-modal', function(e) {
                        e.preventDefault();

                        var t = $(this);

                        View.control.openModal(t.attr('href'));

                        return false;
                    });


                    body.off('click.closeModalOnClick', '.js-close-modal').on('click.closeModalOnClick', '.js-close-modal', function() {
                        View.control.closeModal();
                    });
                },
            },


            local: {


                // инициализация выпадающих меню
                dropdowns: function (scope) {
                    var showTimeout, hideTimeout;

                    if (View.mobileAndTabletCheck || window.innerWidth < 991) // на телефонах / планшетах открытие по клику
                    {
                        $('.js-dropdown__btn', scope).off('click.openDropdown').on('click.openDropdown', function (e) {
                            var btn = $(this);
                            var dropdown = btn.closest('.js-dropdown');
                            var dropdownBody = dropdown.find('.js-dropdown__body');
                            var related = dropdown.attr('data-dropdown-rel');

                            // нотификейшны не открываются вручную
                            if (dropdown.hasClass('.js-notification')) return;

                            if (btn.hasClass('open')) {
                                View.control.closeDropdown(dropdown, dropdownBody, btn, related);

                                $('.js-dropdown').removeClass('open');

                                clearTimeout(hideTimeout);
                                clearTimeout(showTimeout);
                                e.preventDefault();
                            }
                            else {
                                View.control.openDropdown(dropdown, dropdownBody, btn, related);
                                e.preventDefault();
                            }
                            e.preventDefault();
                        });
                    }
                    else    // на десктопе открытие по наведению
                    {
                        // при остановке мыши на выпадающем меню - открытие меню
                        $('.js-dropdown__btn', scope).off('mouseenter.openDropdown').on('mouseenter.openDropdown', function () {

                            var btn = $(this);

                            if (btn.hasClass('closed')) return;

                            var dropdown = btn.closest('.js-dropdown');

                            if (dropdown.hasClass('js-dropdown-onclick'))
                                return;

                            var dropdownBody = dropdown.find('.js-dropdown__body');
                            var related = dropdown.attr('data-dropdown-rel');

                            // нотификейшны не открываются вручную
                            if (dropdown.hasClass('js-notification')) return;

                            // ждем остановки курсора
                            if (!dropdown.hasClass('open')) {
                                    View.control.openDropdown(dropdown, btn, dropdownBody, related);
                            }
                        });

                        // при наведении мыши на выпадающее меню - отмена скрытия меню
                        $('.js-dropdown__btn, .js-dropdown__body', scope).off('mouseover.openDropdown').on('mouseover.openDropdown', function () {
                            if ($(this).hasClass('open')) {
                                clearTimeout(hideTimeout);
                            }
                        });

                        // при уведении мыши с выпадающего меню - запуск таймера на скрытие меню
                        $('.js-dropdown__btn, .js-dropdown__body', scope).off('mouseleave.closeDropdown').on('mouseleave.closeDropdown', function () {
                            var dropdown = $(this).closest('.js-dropdown');
                            if (dropdown.hasClass('js-dropdown-onclick'))
                                return;
                            clearTimeout(showTimeout);

                            // не скрывать меню, если в нем фокус
                            if ($('.js-dropdown.open .js-dropdown__body input:focus, .js-dropdown.open .js-dropdown__body textarea:focus').length > 0)
                                return;

                            hideTimeout = setTimeout(function () {
                                View.control.closeAllDropdowns();
                            }, 400);
                        });

                        // при клике на открытый пункт меню - закрытие
                        $('.js-dropdown__btn', scope).off('click.closeDropdown').on('click.closeDropdown', function () {
                            var btn = $(this);
                            var dropdown = btn.closest('.js-dropdown');
                            var dropdownBody = dropdown.find('.js-dropdown__body');
                            var related = btn.attr('data-dropdown-rel');

                            if (btn.hasClass('open') && dropdown.hasClass('open')) {
                                View.control.closeAllDropdowns();

                                btn.addClass('closed');
                                dropdown.removeClass('open');
                            }
                            else if (!dropdown.hasClass('js-notification')) {
                                View.control.openDropdown(dropdown, btn, dropdownBody, related);
                            }
                            if (!btn.hasClass('pseudo-btn') && dropdown.hasClass('js-dropdown-onclick'))
                                return false;
                        });


                        // кнопка закрытия выпадающих меню
                        body.off('click.closeDropdown', '.js-dropdown__close').on('click.closeDropdown', '.js-dropdown__close', function () {
                            View.control.closeAllDropdowns();
                        });
                    }
                    body.off('click.closeAllDropdownsClick, touch.closeAllDropdownsClickq')
                        .on('click.closeAllDropdownsClick, touch.closeAllDropdownsClickq', function (e) {
                            if ($(e.target).closest('.js-dropdown').length == 0) {
                                View.control.closeAllDropdowns();
                            }
                        });
                },


                // инициализация слайдеров

                sliders: function (scope) {
                    $('.js-slider-about', scope).slick({
                        arrows: true,
                        dots: false,
                        infinite: true,
                        slidesToShow: 3,
                        slidesToScroll: 1,
                        speed: 500,
                        autoplay: false,
                        prevArrow: '<a href="#" class="slick-arrow slick-prev"></a>',
                        nextArrow: '<a href="#" class="slick-arrow slick-next"></a>',
                        responsive: [
                            {
                                breakpoint: 992,
                                settings: {
                                    slidesToShow: 2
                                }
                            }, {
                                breakpoint: 540,
                                settings: {
                                    slidesToShow: 1
                                }
                            }
                        ]
                    });

                },


                // инициализация селектов
                selectsLocal: function (scope) {
                    var selects = $(scope);
                    if (!selects.is('select')) selects = $('select.js-select', scope);

                    selects.each(function () {
                        var select = $(this);
                        var selectVisual = select.closest('.js-select-visual');
                        var selectList;
                        var defaultText = select.attr('data-placeholder-txt');
                        var selectedText;
                        var placeholderState = select.find('option[selected]').length === 0 && defaultText ? true : false;

                        selectedText = select.find('option:selected');

                        if (selectedText.length > 0) {
                            if (selectedText.attr('data-img'))
                                selectedText = '<img src="' + selectedText.attr('data-img') + '" alt="">' + selectedText.html();
                            else
                                selectedText = selectedText.html();
                        }
                        else {
                            selectedText = select.find('option:first-child').html();
                        }

                        if (selectVisual.length) {
                            selectVisual.children().not(select).remove();
                            select.unwrap('.js-select-visual');
                        }

                        selectVisual = $('<div class="js-select-visual ' + select.attr('class') + '" tabindex="0"></div>');
                        selectValue = $('<span class="select-value js-select-value">' + selectedText + '</span>');
                        selectList = $('<ul class="select-list"></ul>');

                        var option;
                        var optionContent;
                        var optionImg;
                        var optionClass;
                        select.find('option').each(function () {
                            option = $(this);
                            optionContent = option.html();
                            optionImg = option.attr('data-img');
                            optionClass = 'class="';

                            if (option.attr('value') === select.val() && !placeholderState)
                                optionClass += 'active ';
                            if (option.is(':disabled'))
                                optionClass += 'disabled ';

                            optionClass += '"';


                            if (optionImg) optionContent = '<img src="' + optionImg + '" alt="">' + optionContent;

                            selectList.append(
                                '<li data-value="' + option.attr('value') + '" ' + optionClass + 'tabindex="0">' + optionContent + '</li>');
                        });

                        selectVisual.append(selectValue).append(selectList).removeClass('js-select js-alt-tab-controller');
                        select.after(selectVisual);
                        selectVisual.prepend(select);

                        if (defaultText) {
                            selectVisual.addClass('has-placeholder');
                            selectVisual.prepend('<span class="select-placeholder">' + defaultText + '</span>');

                            if (placeholderState) {
                                selectVisual.addClass('placeholder-state');
                                selectVisual.find('.js-select-value').html('');
                            }
                        }
                    }).trigger('change.changeSelectVisual').trigger('recalcSelectAutoWidth');


                    $('select.js-select-for-content', scope).trigger('change');
                },


                // инициализация маски ввода для телефонов
                maskInput: function (scope) {
                    if (typeof scope === undefined)
                        scope = 'body';

                    $('.js-mask-input', scope).not('.is-stl').each(function () {
                        $(this).inputmask({showMaskOnHover: false}).addClass('is-stl');
                    });


                    $(".js-mask-input--phone", scope).inputmask({
                        mask: "(99) 999-99-99",
                        placeholder: '(__) ___-__-__',
                        showMaskOnHover: false
                    });
                    $(".js-mask-input--date", scope).inputmask({
                        mask: "99.99.9999",
                        placeholder: '__.__.____',
                        showMaskOnHover: false
                    });
                    $(".js-mask-input--passport-num", scope).inputmask({
                        mask: "AA 9999999",
                        placeholder: '__ _______',
                        showMaskOnHover: false
                    });
                    $(".js-mask-input--passport-id", scope).inputmask({
                        mask: "9999999A999AA9",
                        placeholder: '______________',
                        showMaskOnHover: false
                    });
                },



                // инициализация выпадающих меню
                accordion: function (scope) {
                    var slideTime = 300;

                    $('.js-accordion__btn', scope).off('click.openAccordion').on('click.openAccordion', function (e) {
                        var btn = $(this);
                        var accordion = btn.closest('.js-accordion');
                        var accordionBody = $(accordion.find('.js-accordion__body')[0]);
                        var accordionInit = accordion.attr('data-accordion-init');

                        if(typeof accordionInit !== 'undefined')
                        {
                            var winWidth = $(window).width();

                            if((accordionInit === 'md' && winWidth >= 1199)
                                || (accordionInit === 'sm' && winWidth >= 991)
                                || (accordionInit === 'xs' && winWidth >= 767))
                                return;
                        }


                        if (accordionBody.is(':visible')) {
                            accordionBody.slideUp(slideTime);
                            btn.removeClass('open');
                            accordion.removeClass('open');
                        }
                        else {
                            accordionBody.slideDown(slideTime);
                            btn.addClass('open');
                            accordion.addClass('open');
                        }
                        e.preventDefault();
                        return false;
                    });
                },


                // подсколл к элементу
                scroolTo: function () {
                    body.off('click.scroolto', '.js-scrool-to').on('click.scroolto', '.js-scrool-to', function (e) {
                        var t = $(this);
                        var target = $(t.attr('href') || t.attr('data-scrool-to'));

                        $('html, body').animate({
                            scrollTop: target.offset().top
                        }, Math.max(300, 1000 * Math.abs(target.offset().top - $(window).scrollTop()) / body.outerHeight()));
                        return false;
                    });
                },



                slideBoxInit: function () {
                    var btn = $('.js-slide__btn');

                    btn.off('click.slideBoxToggle').on('click.slideBoxToggle', function () {
                        var $this = $(this);
                        var container = $this.closest('.js-slide');
                        var blocks = container.find('.js-slide__body');

                        if (blocks.is(':visible')) {
                            blocks.slideUp(0);
                            container.removeClass('show');
                        } else {
                            blocks.slideDown(0);
                            container.addClass('show');
                        }
                        return false;
                    });
                },

                // стрелки прокрутки вверх и вниз
                scrollingArrows: function () {
                    var arrowTop = $('.js-scroll-up');
                    var arrowBottom = $('.js-scroll-down');


                    body.off('click.scrollToTop', '.js-scroll-up').on('click.scrollToTop', '.js-scroll-up', function () {
                        body.addClass('scroll-busy');

                        htmlbody.animate(
                            {
                                scrollTop: 0
                            },
                            {
                                duration: 700,
                                complete: function () {
                                    body.removeClass('scroll-busy');
                                }
                            });
                    });

                    body.off('click.scrollToBottom', '.js-scroll-down').on('click.scrollToBottom', '.js-scroll-down', function () {
                        var scrollDownTo = $($(this).attr('data-scroll-to'));
                        var scrollTo = scrollDownTo.length > 0 ? scrollDownTo.offset().top : false;
                        if (scrollTo && scrollTo <= win.scrollTop()) scrollTo = false;
                        var offsetTop = scrollTo ? scrollTo : $('.page-footer').offset().top;

                        body.addClass('scroll-busy');

                        htmlbody.animate(
                            {
                                scrollTop: offsetTop
                            },
                            {
                                duration: 700,
                                complete: function () {
                                    body.removeClass('scroll-busy');
                                }
                            });
                    });

                    win.off('scroll.controlScrollArrows').on('scroll.controlScrollArrows', function () {
                        if (body.height() < window.innerHeight * 1.5) {
                            arrowTop.closest('.js-fixed-nav-item').addClass('hidden');
                            arrowBottom.closest('.js-fixed-nav-item').addClass('hidden');
                            return;
                        }

                        if (win.scrollTop() > 200) {
                            arrowTop.closest('.js-fixed-nav-item').removeClass('hidden');
                        }
                        else {
                            arrowTop.closest('.js-fixed-nav-item').addClass('hidden');
                        }

                        if (win.scrollTop() >= body.height() - win.height() - 100) {
                            arrowBottom.closest('.js-fixed-nav-item').addClass('hidden');
                        }
                        else {
                            arrowBottom.closest('.js-fixed-nav-item').removeClass('hidden');
                        }
                    }).trigger('scroll.controlScrollArrows');
                },

                sidebarInit: function () {
                    var btnOpen = $('.js-sidebar-open');
                    var btnClose = $('.js-sidebar-close');

                    btnOpen.off('click.openSidebar').on('click.openSidebar', function () {
                        $('html').addClass('sidebar-open');
                        body.css({paddingRight: View.scrollBarWidth});
                        return false;
                    });
                    btnClose.off('click.closeSidebar').on('click.closeSidebar', function () {
                        $('html').removeClass('sidebar-open');
                        body.css({paddingRight: ''});
                        return false;
                    });

                    body.off('click.closeSidebarOnBody').on('click.closeSidebarOnBody', function (e) {
                        var target = $(e.target);
                        if ($('html').hasClass('sidebar-open') && !target.closest('.sidebar').length)
                            btnClose.trigger('click');
                    })
                },


                inputAllCheckInit: function () {
                    var mainCheck = $('.js-input-all__main');
                    var input = $('.js-input');

                    mainCheck.off('change.inputAllCheckInit').on('change.inputAllCheckInit', function () {
                        var $this = $(this);
                        var container = $this.closest('.js-input-all');
                        var inputs = container.find('.js-input');
                        var count = $('.js-input-count');
                        var receiver = container.find('.js-input-data-receiver');
                        var receiverDefault = receiver.attr('data-default');
                        var temp = 0;

                        $.each(inputs, function (index, val) {
                            var checkbox = $(val);
                            if ($this.prop('checked') && checkbox.closest('li').is(':visible')){
                                checkbox.prop('checked', true);
                                temp++;
                            } else
                                if(!$this.prop('checked') && checkbox.closest('li').is(':visible'))
                                    checkbox.prop('checked', false);


                        });

                        if (inputs.filter(':checked').length)
                            $this.closest('.checkbox-label').addClass('decor');

                        if (inputs.filter(':checked').length === inputs.length)
                            $this.closest('.checkbox-label').removeClass('decor');



                        if (count.length) {
                            if (inputs.filter(':checked').length) {
                                count.parent().css({opacity: 1});
                                count.html(inputs.filter(':checked').length);
                            } else {
                                count.parent().css({opacity: 0});
                            }
                        }



                        if (receiver.length && inputs.filter(':checked').length === inputs.length || !inputs.filter(':checked').length)
                            receiver.html(receiverDefault);
                        else {
                            $.each(inputs.filter(':checked'), function (idex, val) {
                                var text = receiver.html();
                                if (text === '' || text === receiverDefault)
                                    receiver.html($(val).closest('label').find('.checkbox-text').html());
                                else
                                    receiver.html(text + ', ' + $(val).closest('label').find('.checkbox-text').html());
                            })
                        }
                    });

                    input.off('change.inputMainCheckInit').on('change.inputMainCheckInit', function () {
                        var $this = $(this);
                        var container = $this.closest('.js-input-all');
                        var mainInput = container.find('.js-input-all__main');
                        var inputs = container.find('.js-input');
                        var checked = true;
                        var count = $('.js-input-count');
                        var receiver = container.find('.js-input-data-receiver');
                        var receiverDefault = receiver.attr('data-default');


                        if($this.prop('checked')) {
                            $.each(inputs, function (index, val) {
                                var prop = $(val).prop('checked');
                                if (!prop) {
                                    mainInput.closest('.checkbox-label').addClass('decor');
                                    checked = false;
                                    return false;
                                }
                            });
                        } else {
                            checked = false;
                            mainInput.prop('checked', false);

                            $.each(inputs, function (index, val) {
                                var prop = $(val).prop('checked');
                                if (prop) {
                                    mainInput.closest('.checkbox-label').addClass('decor');
                                    return false;
                                }
                            });

                        }


                        if (checked) {
                            mainInput.prop('checked', true);
                            mainInput.closest('.checkbox-label').removeClass('decor');
                        }

                        var text = receiver.html();

                        if (receiver.length && inputs.filter(':checked').length === inputs.length)
                            receiver.html(receiverDefault);
                        else {
                            if ($this.prop('checked')) {
                                if (text === '' || text === receiverDefault)
                                    receiver.html($this.closest('label').find('.checkbox-text').html());
                                else
                                    receiver.html(receiver.html() + ', ' + $this.closest('label').find('.checkbox-text').html());
                            } else {
                                if (text === '' || text === receiverDefault)
                                    $.each(inputs.filter(':checked'), function (idex, val) {
                                        var text = receiver.html();
                                        if (text === '' || text === receiverDefault)
                                            receiver.html($(val).closest('label').find('.checkbox-text').html());
                                        else
                                            receiver.html(text + ', ' + $(val).closest('label').find('.checkbox-text').html());
                                    });
                                else {
                                    var newText = receiver.html().replace(', ' + $this.closest('label').find('.checkbox-text').html(), '');
                                    newText = newText.replace($this.closest('label').find('.checkbox-text').html() + ', ', '');
                                    receiver.html(newText);

                                    if(!inputs.filter(':checked').length)
                                        receiver.html(receiverDefault);
                                }
                            }
                        }


                        if (count.length) {
                            if (inputs.filter(':checked').length) {
                                count.parent().css({opacity: 1});
                                count.html(inputs.filter(':checked').length);
                            } else {
                                count.parent().css({opacity: 0});
                                mainInput.closest('.checkbox-label').removeClass('decor');
                            }
                        }
                    })
                },

                seachInputInit: function () {
                    var menuSearchInput = $('.js-menu-search__input');
                    var container = menuSearchInput.closest('.js-menu-search');
                    var menuSearchItem = container.find( '.js-input' );

                    menuSearchInput.on('change', function (e) {
                        var searchText = $(this).val();
                        searchInMenu(searchText);
                    });

                    menuSearchInput.on( 'keyup', function(e){
                        $( this ).trigger( 'change' );
                    } );


                    function searchInMenu( searchText  ){
                        if( searchText.length <= 0 ){
                            menuSearchItem.closest('li').show();

                            menuSearchItem.closest('li').find('b').each(function () {
                                $(this).replaceWith(this.innerHTML);
                            });

                        } else {
                            menuSearchItem.closest('li').hide();

                            menuSearchItem.closest('li').find('b').each(function () {
                                $(this).replaceWith(this.innerHTML);
                            });

                            $.each(menuSearchItem, function (index, val) {
                                var textBox = $(val).closest('label').find('.checkbox-text');
                                var text = textBox.html();

                                var i = text.toLowerCase().indexOf(searchText.toLowerCase());

                                if (i !== -1) {
                                    var length = searchText.length;

                                    $(this).closest('li').show();

                                    var strFirst = '';
                                    var strMiddle = '';
                                    var strLast = '';
                                    for (var j = 0; j < text.length; j++) {
                                        if (j < i)
                                            strFirst += text.charAt(j);
                                        else if (j < i + length)
                                            strMiddle += text.charAt(j);
                                        else
                                            strLast += text.charAt(j);
                                    }
                                    textBox.html(strFirst + '<b>' + strMiddle + '</b>' + strLast);
                                }
                            });
                        }
                    }

                },

                overlayInit: function() {
                    var overlay = $('.js-overlay');
                    overlay.off('click.closeAllOnOverlay').on('click.closeAllOnOverlay', function () {
                        View.control.closeAll()
                    })
                },
                
                topPanelRowInit: function () {
                    var panel = $('.js-top-row-fixed');
                    var topa = $('.page-main').offset().top - panel.innerHeight();

                    win.off('scroll.topPanelRowInit').on('scroll.topPanelRowInit', function () {
                        if (win.scrollTop() >= topa && !panel.hasClass('show'))
                            panel.addClass('show');
                        else if (win.scrollTop() < topa && panel.hasClass('show'))
                            panel.removeClass('show');
                    })
                }
            }
        },





        this.initView = function () {
            body = $(document.body);
            htmlbody = $([document.documentElement, document.body]);
            win = $(window);

            this.scrollBarWidth = (function () {
                var outer = document.createElement("div");
                outer.style.visibility = "hidden";
                outer.style.width = "100px";
                outer.style.msOverflowStyle = "scrollbar";

                document.body.appendChild(outer);

                var widthNoScroll = outer.offsetWidth;
                // force scrollbars
                outer.style.overflow = "scroll";

                // add innerdiv
                var inner = document.createElement("div");
                inner.style.width = "100%";
                outer.appendChild(inner);

                var widthWithScroll = inner.offsetWidth;

                // remove divs
                outer.parentNode.removeChild(outer);

                return widthNoScroll - widthWithScroll;
            })();
        },


        this.initAllGlobal = function () {
            $.each(this.init.global, function (index, fn) {
                if (typeof fn === 'function') fn();
            });
        };


    this.initAllLocal = function (scope) {
        $.each(this.init.local, function (index, fn) {
            if (typeof fn === 'function') fn(scope);
        });
    };
})();
function initAllLocal(event, scope) {
    View.initAllLocal(scope);

}

$(document).ready(function () {
   
    
    var body = $(document.body);
    var iOS = parseInt(
            ('' + (/CPU.*OS ([0-9_]{1,5})|(CPU like).*AppleWebKit.*Mobile/i.exec(navigator.userAgent) || [0, ''])[1])
                .replace('undefined', '3_2').replace('_', '.').replace('_', '')
        ) || false;

    body.addClass(iOS ? ('ios ios-' + iOS) : 'no-ios');
    body.addClass($.browser.webkit ? 'webkit' : 'no-webkit');
    body.addClass(View.mobileAndTabletCheck ? 'touch' : 'no-touch');
    body.addClass('script-on');

    View.initView();
    View.initAllGlobal();
    $("body").on("onAjaxReload.initAllLocal", initAllLocal).triggerHandler("onAjaxReload.initAllLocal", [$("body")]);


    if (navigator.userAgent.match(/Trident\/7\./)) { // if IE
        $('body').on("mousewheel", function () {
            // remove default behavior
            event.preventDefault();

            //scroll without smoothing
            var wheelDelta = event.wheelDelta;
            var currentScrollPosition = window.pageYOffset;
            window.scrollTo(0, currentScrollPosition - wheelDelta);
        });
    };

    
});