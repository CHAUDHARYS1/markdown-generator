module.exports = (github, email, description, license, dependencies, tests, usingRepo, contributeRepo) =>{
    return `
    ### ${github}
    ### ${email}
    ### ${description}
    ### ${license}
    ### ${dependencies}
    ### ${tests}
    ### ${usingRepo}
    ### ${contributeRepo}
    `
};