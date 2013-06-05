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
package nl.b3p.viewer.stripes;

import java.io.StringReader;
import net.sourceforge.stripes.action.ActionBean;
import net.sourceforge.stripes.action.ActionBeanContext;
import net.sourceforge.stripes.action.Resolution;
import net.sourceforge.stripes.action.StreamingResolution;
import net.sourceforge.stripes.action.StrictBinding;
import net.sourceforge.stripes.action.UrlBinding;
import net.sourceforge.stripes.validation.Validate;
import org.apache.commons.logging.Log;
import org.apache.commons.logging.LogFactory;
import org.json.JSONException;
import org.json.JSONObject;

/**
 *
 * @author Meine Toonen
 */

@UrlBinding("/action/question")
@StrictBinding
public class QuestionnaireActionBean implements ActionBean {
    private static final Log log = LogFactory.getLog(QuestionnaireActionBean.class);
    
    private ActionBeanContext context;
 
    //<editor-fold defaultstate="collapsed" desc="getters and setters">
    public ActionBeanContext getContext() {
        return context;
    }
    
    public void setContext(ActionBeanContext context) {
        this.context = context;
    }

    public String getAnswer() {
        return answer;
    }

    public void setAnswer(String answer) {
        this.answer = answer;
    }

    public int getQuestionId() {
        return questionId;
    }

    public void setQuestionId(int questionId) {
        this.questionId = questionId;
    }
    
    
    //</editor-fold>
    
    @Validate
    private String answer;
    @Validate
    private int questionId;
    
    public Resolution create() throws JSONException{
         JSONObject json = new JSONObject();

        json.put("success", Boolean.FALSE);
        String error = null;

        try {

            json.put("success", Boolean.TRUE);
        } catch(Exception e) {
    
            error = e.toString();
            if(e.getCause() != null) {
                error += "; cause: " + e.getCause().toString();
            }
            log.error(e);
        }
        
        if(error != null) {
            json.put("error", error);
        }
        
        return new StreamingResolution("application/json", new StringReader(json.toString()));          
    }
    
    public Resolution retrieve() throws JSONException{
         JSONObject json = new JSONObject();

        json.put("success", Boolean.FALSE);
        String error = null;

        try {

            json.put("success", Boolean.TRUE);
        } catch(Exception e) {
    
            error = e.toString();
            if(e.getCause() != null) {
                error += "; cause: " + e.getCause().toString();
            }
            log.error(e);
        }
        
        if(error != null) {
            json.put("error", error);
        }
        
        return new StreamingResolution("application/json", new StringReader(json.toString()));          
    }
    
    public Resolution answer() throws JSONException{
         JSONObject json = new JSONObject();

        json.put("success", Boolean.FALSE);
        String error = null;

        try {

            json.put("success", Boolean.TRUE);
        } catch(Exception e) {
    
            error = e.toString();
            if(e.getCause() != null) {
                error += "; cause: " + e.getCause().toString();
            }
            log.error(e);
        }
        
        if(error != null) {
            json.put("error", error);
        }
        
        return new StreamingResolution("application/json", new StringReader(json.toString()));          
    }
}
