define(function() { return Backbone.View.extend({

        focus: -1,

        initialize: function() {
            $('body').on('keydown', _.bind(this.handleKeydown, this));
            $('body').on('click', _.bind(this.handleClick, this));
        },

        render: function() {
            this.buildRaster();

            this.model.each(function(item) {
                item.set({'active': 1});
            });
        },

        buildRaster: function() {
            var count = Math.sqrt(this.model.length);

            var id = 0;

            for (var rows = 0; rows < count; rows++) {
                var row = $('<div class="row"></div>');
                for (var cells = 0; cells < count; cells++) {
                    var cell = $('<div class="cell" id="' + id++ + '"></div>');
                    row.append(cell);
                }
                $('#container').append(row);
            }
        },

        handleKeydown: function(e) {
            var count = Math.sqrt(this.model.length);

            switch (e.keyCode) {
                case 37:
                    if (this.focus % count > 0) {
                        this.focus -= 1;
                    }
                    break;
                case 39:
                    if (this.focus % count < count - 1) {
                        this.focus += 1;
                    }
                    break;
                case 38:
                    if (Math.floor(this.focus / count) > 0) {
                        this.focus -= count;
                    }
                    break;
                case 40:
                    if (this.focus / count < count - 1 && this.focus > -1) {
                        this.focus += count;
                    }
                    break;
                case 32:
                    this.model.at(this.focus).toggleStatus();
                    break;
            }
            this.handleFocus();
        },

        handleClick: function() {
            this.focus = -1;
            this.handleFocus();
        },

        handleFocus: function() {
            $('.active').removeClass('active');
            if (this.focus > -1) {
                $('#' + this.focus).addClass('active');
            }
        }
    });
});