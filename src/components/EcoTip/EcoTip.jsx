import "./EcoTip.css";

function EcoTip(){

    const tips=[

        "Planificar reduce el desperdicio de tiempo.",

        "Reutilizar código también es sostenibilidad.",

        "Un software eficiente consume menos recursos.",

        "Organizar tu día mejora la productividad.",

        "Cada pequeña tarea completada es un gran avance.",

        "Organizar proyectos evita retrabajos.",

        "La sostenibilidad también empieza en el software."

    ];

    const randomTip=tips[Math.floor(Math.random()*tips.length)];

    return(

        <div className="tip">

            <h3>SimpleTip💡</h3>

            <p>{randomTip}</p>

        </div>

    );

}

export default EcoTip;