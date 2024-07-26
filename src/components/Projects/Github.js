import React from "react";
import GitHubCalendar from "react-github-calendar";
import { Row } from "react-bootstrap";

function Github() {
    const customTheme = {
        dark: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
        light: ['#383838', '#4D455D', '#7DB9B6', '#F5E9CF', '#E96479'],
    };

    return (
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
            <h1 className="project-heading" style={{ paddingBottom: "20px" }}>
                My <strong className="purple">GitHub</strong> Activity
            </h1>
            <GitHubCalendar
                username="yunuseyvz"
                blockSize={15}
                blockMargin={5}
                fontSize={16}
                
            />
        </Row>
    );
}

export default Github;