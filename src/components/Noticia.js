import React from 'react';
import PropTypes from 'prop-types';

const Noticia = ({noticia}) => {

    const {urlToImage, url, title, description, source} = noticia;

    //loading conditionally the image
    const imagen = (urlToImage) ?
        <div class="card-image">
            <img src={urlToImage} alt={title}/>
            <span className="card-title">{source.name}</span>
        </div>
    : null;

    return (
        <div className="col s12 m6 l4">
            <div className="card">
                {imagen}
                <div className="card-content">
                    <p>{title}</p>
                    <p>{description}</p>
                </div>
                <div className="card-action">
                    <a href={url} target="_blank" rel="noopener noreferrer" className="waves-effect waves-light btn">
                        Ver Noticia Completa
                    </a>
                </div>
            </div>
        </div>

    );
}


Noticia.propTypes = {
    noticia : PropTypes.object.isRequired
}
 

export default Noticia;