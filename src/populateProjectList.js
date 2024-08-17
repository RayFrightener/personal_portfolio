function populateProjectList() {
    function createProject(name, description, link) {
        return {
            name: name,
            description: description,
            link: link
        };
    }

    const projects = [
        createProject(
            'Collect Computer Info Script',
            "<p><b>Features:</b> Retrieves and records the computer's serial number, hostname, model, Ethernet MAC address, and Wi-Fi MAC address; Outputs the collected information to a text file on the USB drive; Automatically appends new information to the file if it already exists; Handles errors gracefully and provides user feedback.</p><p><b>Technologies</b>: PowerShell, Bash. <p><p><b>Outcome:</b> Enabled efficient and automated collection of critical system information, simplifying inventory and troubleshooting processes and reducing time spent on inventory by 88%.</p>",
            'https://example.com/collectComputerInfo'
                    ),
        createProject(
            'Standard Calculator',
            "<p><b>Features:</b> Basic arithmetic operations: addition, subtraction, multiplication, and division, user-friendly interface, a clear button for easy reset of the calculation, and error handling for invalid inputs.</p><p><b>Technologies:</b> Javascript, Bootstrap Framework.</p><p><b>Outcome:</b> Provided users with an efficient and intuitive tool for performing everyday calculations, enhancing user experience through a clean and simple interface.</p>",
            'https://rayfrightener.github.io/calculator/'
        ),
        createProject(
            'Rock, Paper, Scissors Game',
            "<b>Features:</b> Implements a simple interactive game where the player competes against the computer; Tracks and displays the player's and computer's scores in real-time; Provides immediate feedback on each round's result (win, lose, or draw); Ends the game when either the player or the computer reaches 5 points; Offers a restart button to begin a new game session.<p><b>Technologies:</b> JavaScript, HTML, CSS.</p><p><b>Outcome:</b> Developed a functional and engaging web application that enhances understanding of JavaScript event handling, DOM manipulation, and game logic. Improved programming skills and demonstrated the ability to create interactive user experiences.</p>",
            'https://rayfrightener.github.io/rock-paper-scissors/'
        )
    ];

    const projectList = document.getElementById('projectList');

    if (!projectList) {
        console.error('Element with id "projectList" not found.');
        return;
    }

    projects.forEach(project => {
        const listItem = document.createElement('li');

        const details = document.createElement('details');
        const summary = document.createElement('summary');
        summary.textContent = project.name;

        const description = document.createElement('p');
        description.innerHTML = project.description;

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

export { populateProjectList };