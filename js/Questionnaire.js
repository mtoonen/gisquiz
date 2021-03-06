/* 
 * Copyright (C) 2013 meine
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */


Ext.define("viewer.components.Questionnaire", {
    extend: "viewer.components.Component",
    questions:null,
    constructor: function(conf) {
        viewer.components.Questionnaire.superclass.constructor.call(this, conf);
        this.initConfig(conf);
        var me = this;
        this.questions = new Array();
        this.questions.push(Ext.create(viewer.components.Question,{}));
        this.renderButton({
            handler: function() {
                me.buttonClick();
            },
            text: "open",
            tooltip:" me.tooltip"
        });
        return this;
    },
    buttonClick:function(){
        this.questions[0].show();
    },
    getExtComponents: function() {
        return [];
    }
});

