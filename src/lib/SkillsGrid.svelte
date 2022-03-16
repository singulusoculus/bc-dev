<script>  
    export let skills = false
    export let titleType = false

    const allSkills = [
        {
            name: 'Svelte.js',
            abrv: 'Sv',
            exp: '01',
            type: 'webdev'
        },
        {
            name: 'Sapper',
            abrv: 'Sr',
            exp: '02',
            type: 'webdev'
        },
        {
            name: 'SvelteKit',
            abrv: 'Sk',
            exp: '03',
            type: 'webdev'
        },
        {
            name: 'JavaScript',
            abrv: 'Js',
            exp: '04',
            type: 'webdev'
        },
        {
            name: 'CSS',
            abrv: 'Cs',
            exp: '05',
            type: 'webdev'
        },
        {
            name: 'HTML',
            abrv: 'Ht',
            exp: '06',
            type: 'webdev'
        },
        {
            name: 'MaterializeCSS',
            abrv: 'Ma',
            exp: '07',
            type: 'webdev'
        },
        {
            name: 'PHP',
            abrv: 'Ph',
            exp: '08',
            type: 'webdev'
        },
        {
            name: 'WordPress',
            abrv: 'Wp',
            exp: '09',
            type: 'cms'
        },
        {
            name: 'SASS',
            abrv: 'Sa',
            exp: '10',
            type: 'webdev'
        },
        {
            name: 'Git',
            abrv: 'Gt',
            exp: '11',
            type: 'dev'
        },
        {
            name: 'SQL Server',
            abrv: 'Sq',
            exp: '12',
            type: 'ms'
        },
        {
            name: 'mySQL',
            abrv: 'Mq',
            exp: '13',
            type: 'webdev'
        },
        {
            name: 'Dynamics SL',
            abrv: 'Dy',
            exp: '14',
            type: 'ms'
        },
        {
            name: 'SharePoint',
            abrv: 'Sp',
            exp: '15',
            type: 'ms'
        },
        {
            name: 'SSRS',
            abrv: 'Sr',
            exp: '16',
            type: 'ms'
        },
        {
            name: 'Solver BI360',
            abrv: 'Bi',
            exp: '17',
            type: 'ms'
        },
        {
            name: 'jQuery',
            abrv: 'Jq',
            exp: '18',
            type: 'webdev'
        },
        {
            name: 'Node.js',
            abrv: 'No',
            exp: '19',
            type: 'webdev'
        },
        {
            name: 'Vue.js',
            abrv: 'Vu',
            exp: '20',
            type: 'webdev'
        },
        {
            name: 'React.js',
            abrv: 'Re',
            exp: '21',
            type: 'webdev'
        },
        {
            name: 'Python',
            abrv: 'Py',
            exp: '22',
            type: 'webdev'
        },
        {
            name: 'Oracle',
            abrv: 'Or',
            exp: '23',
            type: 'ms'
        },
        {
            name: 'IBM Cognos',
            abrv: 'Co',
            exp: '24',
            type: 'ms'
        },
        {
            name: 'Snowflake',
            abrv: 'Sf',
            exp: '25',
            type: 'ms'
        },
        {
            name: 'Express.js',
            abrv: 'Ex',
            exp: '26',
            type: 'webdev'
        },
        {
            name: 'Microsoft IIS',
            abrv: 'Mi',
            exp: '27',
            type: 'ms'
        },
        {
            name: 'SCSS',
            abrv: 'Sc',
            exp: '28',
            type: 'webdev'
        },
        {
            name: 'Oracle',
            abrv: 'Or',
            exp: '29',
            type: 'ms'
        },
        {
            name: 'Cognos',
            abrv: 'Cg',
            exp: '30',
            type: 'ms'
        },
        {
            name: 'Netlify',
            abrv: 'Nt',
            exp: '31',
            type: 'webdev'
        },
    ]

    $: filteredSkills = filterSkills(allSkills)

    const filterSkills = (allSkills) => {
        let newSkills = []

        if (skills) {
            allSkills.filter((s) => {
                skills.forEach(i => {
                    if (s.name === i) {
                        newSkills.push(s)
                    }
                })
            })
        } else if (titleType) {
            if (titleType !== 'none') {
                newSkills = allSkills.filter(s => s.type === titleType)
            }

        } else {
            newSkills = allSkills
        }

        return newSkills
    }

</script>

<style>
    .skills-grid-wrapper {
        max-width: 90%;
        min-width: 25%;
    }

    .skills-grid {
        display: grid;
        grid-template-columns: repeat(auto-fill,minmax(70px,1fr));
        grid-auto-rows: 1fr;
        grid-gap: 0;
        z-index: 1;
    }

    .skill-element {
        display: block;
        opacity: .7;
        border: 2px solid rgb(137, 137, 137);
        -webkit-transform: scale(1.03);
        transform: scale(1.03);
        -webkit-transition: all 0.5s linear;
        transition: all 0.5s linear;
        background-color: #fff;
    }

    /* a:hover {
        position: relative;
        text-decoration: underline;
    } */

    .skill-element:hover {
        opacity: 1;
        -webkit-transition: all .3s ease-out;
        transition: all .3s ease-out;
        box-shadow: -10px 10px 11px 0 rgba(0,0,0,0.25);
        transform: scale(1.05);
        z-index: 2;
    }

    .skills-grid svg {
        width: 100%;
        height: 100%;
        display: block;
    }

    .webdev {
        fill: #1D1D8D;
    }

    .cms {
        fill: #f5831a;
    }

    .ms {
        fill: #c24040;
    }

    .dev {
        fill: #527a45;
    }

</style>


<div class="skills-grid-wrapper">
    <div class="skills-grid">
        {#each filteredSkills as skill}
            <div class="skill-element">
                <svg viewBox="0 0 100 100" fill="none">
                    <text class="skill-element-exp" x="10" y="20" font-size="14" fill="rgb(137, 137, 137)">{skill.exp}</text>
                    <text class="skill-element-symbol {skill.type}" x="50" y="60" width="100%" text-anchor="middle" font-size="35">{skill.abrv}</text>
                    <text class="skill-element-name {skill.type}" x="50" y="80" font-size="14" text-anchor="middle">{skill.name}</text>
                </svg>
            </div>
        {/each}
    </div>
</div>
