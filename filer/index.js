const usersUrl = 'https://jsonplaceholder.typicode.com/users';

onload = async () => {
    const [template, usersJSON] = await Promise.all([fetch('/users.hbs'), fetch(usersUrl)]);
    const [templateText, users] = await Promise.all([template.text(), usersJSON.json()]);
    const compiledTemplate = Handlebars.compile(templateText);
    document.body.innerHTML = compiledTemplate({users});
};
