YUI.add('grid-tab-view', function (Y, NAME, imports, exports) {
    'use strict';

    var SELECTED_PANEL = '.grid-panel-selected',
        SELECTED_TAB   = '.grid-tab-link-selected';

    return Y.Base.create('grid-tab-view', Y.View, [], {

        tabEvents: {
            '[data-action="tab"]': {click: 'handleTabClick'}
        },

        initializer: function () {
            this.events = Y.merge(this.tabEvents, this.events);
        },

        handleTabClick: function (e) {
            var container   = this.get('container'),
                id          = e.target.getAttribute('href'),
                selectedTab = container.one(SELECTED_TAB);

            e.preventDefault();

            // Add selected-tab class to the tab.
            if (selectedTab) {
                selectedTab.removeClass(SELECTED_TAB.slice(1));
            }

            e.target.addClass(SELECTED_TAB.slice(1));

            // Add selected-panel class to the panel there will always be a
            // selected panel because of server-side rendering.
            container.one(SELECTED_PANEL).removeClass(SELECTED_PANEL.slice(1));
            container.one(id).addClass(SELECTED_PANEL.slice(1));
        }

    });

}, '0.0.1', {
    es: true,
    requires: [
        'view',
        'node'
    ]
});
