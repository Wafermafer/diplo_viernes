const NovedadItem = (props) => {
    const {title, subtitle, imagen, body} = props;
    // 
    return (
        <div className="novedades">
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <img src={imagen} alt='imagen'/>
            <div dangerouslySetInnerHTML={{ __html: body}}></div>
            <hr></hr>
        </div>
    ); 
}

export default NovedadItem;