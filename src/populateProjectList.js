function createProject(name, description, link) {
    return {
        name: name,
        description: description,
        link: link
    };
}

function populateProjectList(){
    const projects = [
        createProject('Collect Computer Info Script', 'This script collects computer information using the STAR method.', 'https://example.com/collectComputerInfo'),
        createProject('Calculator', 'A simple calculator application built with JavaScript.', 'https://example.com/calculator'),
        createProject('Rock Paper Scissors', 'A Rock Paper Scissors game implemented in JavaScript.', 'https://example.com/rockPaperScissors')
    ];

const projectList = document.getElementById('projectList');

projects.forEach(project => {
    const listItem = document.createElement('li');

    const details = document.createElement('details');
    const summary = document.createElement('summary');
    summary.textContent = project.name;
    
    const description = document.createElement('p');
    description.textContent = project.description;

    const link = document.createElement('a');
    link.href = project.link;
    link.textContent = 'View Project';
    link.target = '_blank';

    details.appendChild(summary);
    details.appendChild(description);
    details.appendChild(link);

    listItem.appendChild(details);
    projectList.appendChild(listItem);
});
}

export default populateProjectList;