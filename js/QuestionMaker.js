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



Ext.define("viewer.components.QuestionMaker", {
    extend: "viewer.components.Component",
    questions: null,
    window: null,
    constructor: function(conf) {
        viewer.components.Questionnaire.superclass.constructor.call(this, conf);
        this.initConfig(conf);
        var me = this;
        this.questions = new Array();
        this.questions.push(Ext.create(viewer.components.Question, {}));
        this.renderButton({
            handler: function() {
                me.buttonClick();
            },
            text: "open",
            tooltip: "Question maker"
        });
        return this;
    },
    createForm: function() {
        this.window = Ext.create('Ext.window.Window', {
            title: 'Vraag',
            height: 500,
            width: 400,
            layout: 'fit',
            items: [
                {
                    xtype: "form",
                    id: "questionForm",
                    items: [
                        {
                            xtype: "combobox",
                            fieldLabel: "Type vraag",
                            queryMode: 'local',
                            name: "type",
                            displayField: 'label',
                            valueField: 'type',
                            store: Ext.create('Ext.data.Store', {
                                fields: ['type', 'label'],
                                data: [
                                    {"label": "Multiple choice", "type": "MC"},
                                    {"label": "Klik om te antwoorden", "type": "CLICK"},
                                    {"label": "Open vraag", "type": "OPEN"}
                                ]
                            }),
                            listeners: {
                                change: {
                                    fn: function(combo, answer) {

                                        var open = Ext.getCmp("openAnswerPanel");
                                        open.setVisible(answer === "OPEN");
                                        var multi = Ext.getCmp("multiAnswerPanel");
                                        multi.setVisible(answer === "MC");
                                        var click = Ext.getCmp("clickAnswerPanel");
                                        click.setVisible(answer === "CLICK");
                                    },
                                    scope: this
                                }
                            }
                        },
                        {
                            xtype: 'textarea',
                            fieldLabel: "Vraag",
                            name: 'questionText',
                            emptyText: "Voer de vraag in..."
                        },
                        {
                            xtype: "panel",
                            id: "openAnswerPanel",
                            hidden: true,
                            items: [
                                {
                                    xtype: "textarea",
                                    id: "openAnswer",
                                    emptyText: "Vul hier het antwoord in"
                                }
                            ]
                        },
                        {
                            xtype: "panel",
                            id: "multiAnswerPanel",
                            hidden: true,
                            items: [
                                {
                                    xtype: "texfield",
                                    id: "multiAnswer",
                                    emptyText: "Dit is een multipleChoice antwoord"
                                }
                            ]
                        },
                        {
                            xtype: "panel",
                            id: "clickAnswerPanel",
                            hidden: true,
                            items: [
                                {
                                    xtype: "label",
                                    id: "clickAnswer",
                                    text: "Druk op de knop en klik het antworod aan op de kaart"
                                },
                                 {
                                    xtype: "number",
                                    id: "distance",
                                    fieldLabel: "Dit is een multipleChoice antwoord"
                                }
                            ]
                        }
                    ]
                }
            ],
            bbar: [
                {
                    xtype: 'button',
                    text: 'Opslaan',
                    listeners: {
                        click: {
                            scope: this,
                            fn: this.save
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
    },
    save: function() {
        Ext.Ajax.request({
            url: actionBeans["question"],
            params: {create: true, rpp: numTweets, latestId: latestId},
            success: function(result) {
                var response = Ext.JSON.decode(result.responseText);

                if (response.success) {
                    successFunction(response);
                } else {
                    if (failureFunction != undefined) {
                        failureFunction(response.error);
                    }
                }
            },
            failure: function(result) {
                if (failureFunction != undefined) {
                    failureFunction("Ajax request failed with status " + result.status + " " + result.statusText + ": " + result.responseText);
                }
            }
        });
    },
    cancel: function() {
        this.window.hide();
    },
    buttonClick: function() {
        if (this.window === null) {
            this.createForm();
        }
        this.window.show();
    },
    getExtComponents: function() {
        return [this.window];
    }
});


