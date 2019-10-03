let jsb = {

    elementCreation: function(inside, container, setClass, headLine, content){
        let mainElement = document.querySelector(inside);
        //let containerElement = document.createElement(container);
        let containerElement = () => {
            if(container == String) {
                document.createElement(container);
            } else if (container == Object) {
                mainElement.appendChild(containerElement);
            }
        }
        containerElement.setAttribute('class', setClass);
    
        
        containerElement.appendChild(headLine);
        containerElement.appendChild(content);
    },    
    contentCreation: function(tag, text){
        let contentTag = document.createElement(tag);
        let contentText = document.createTextNode(text);
    
        contentTag.appendChild(contentText);
        
        return contentTag;
    },

    createForm: function(){
        let form = document.createElement('form');
        let nameLabel = document.createElement('label');
        let nameInput = document.createElement('input');
        let emailLabel = document.createElement('label');
        let emailInput = document.createElement('input');
        let messageLabel = document.createElement('label');
        let messageInput = document.createElement('textarea');

        form.appendChild(nameLabel);
        form.appendChild(nameInput);
        form.appendChild(emailLabel);
        form.appendChild(emailInput);
        form.appendChild(messageLabel);
        form.appendChild(messageInput);

        return form;
    }
};

jsb.elementCreation('main', 'article', 'articleClass', jsb.contentCreation('h1', 'Så er der ballade'), jsb.contentCreation('p', 'aldrig har der været så meget ballade, ballade'));
jsb.elementCreation('article', 'section', 'sectionClass', jsb.contentCreation('h2', 'Knap så meget ballade'), jsb.contentCreation('p', 'Her er sektionen med knap så meget ballade'));
jsb.elementCreation('section', 'article', 'articleClass', jsb.contentCreation('h3', 'Hold nu op med indhold'), jsb.contentCreation('p', `Aldrig har man set så meget indhold, hold nu op`));
jsb.elementCreation('section', jsb.createForm(), 'articleClass', jsb.contentCreation('h3', 'Hold nu op med indhold'), jsb.contentCreation('p', `Aldrig har man set så meget indhold, hold nu op`));
