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


/**
 * A question for the questionnaire component
 */
Ext.define("viewer.components.Question", {
    extend: "Ext.util.Observable",
    window: null,
    config: {
        id: null,
        question: null,
        type: null,
        answer: null
    },
    constructor: function(config) {
        config = {
            question: "Wie ben ik?",
            id: 1,
            type: "simple"
        };
        this.initConfig(config);
        this.window = Ext.create('Ext.window.Window', {
            title: 'Vraag',
            height: 200,
            width: 400,
            layout: 'fit',
            items: [
                {
                    xtype: "panel",
                    items: [
                        {
                            xtype: 'label',
                            text: this.question
                        }
                    ]
                }
            ],
            bbar: [
                {
                    xtype: 'button',
                    text: 'Beantwoord',
                    listeners: {
                        click: {
                            scope: this,
                            fn: this.giveAnswer
                        }
                    }
                },
                {
                    xtype: 'button',
                    text: 'Annuleren',
                    listeners: {
                        click: {
                            scope: this,
                            fn: this.cancel
                        }
                    }
                }
            ]
        });
        return this;
    },
    show: function() {
        this.window.show();
    },
    cancel: function() {
        var a = 0;
    },
    save: function() {
        var a = 0;
    },
    giveAnswer: function(answer, group) {
        var a = 0;
    },
    getUI: function() {
        return this.window;
    },
    getExtComponents: function() {
        return [this.window];
    },
    createAnswerForm: functi
});
