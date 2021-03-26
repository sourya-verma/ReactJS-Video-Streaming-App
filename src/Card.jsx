import React from 'react'


function Card(props) {

    return (
        <><div className="MainCard">
            <div className="card" >
                <img src={props.imgsrc} alt="Avatar" alt="dark-logo" style={{ width: "100%" }} />
                <div className="container">
                    <h4><b>{props.sname}</b></h4>
                    <p>{props.stype}</p><br />
                    <a href={props.slink}><button className="btn btn-success btn-large">Watch Now</button></a>
                </div>
            </div>

        </div>
        </>)
}

function CardDouble() {
    return (
        <>
            <div className='row align-items-center'>
            <div class="col-sm-4"><Card stype="Thriller" slink="https://www.youtube.com/watch?v=cq2iTHoLrt0" sname="Dark" imgsrc="https://scontent.fhyd2-1.fna.fbcdn.net/v/t1.0-9/106986447_3077815975620700_3016194236411331612_o.jpg?_nc_cat=105&ccb=3&_nc_sid=dd9801&_nc_ohc=8F3F-t2rlUcAX9cv03U&_nc_ht=scontent.fhyd2-1.fna&oh=494c8d6b4e565f263da2db1170b98126&oe=6063671B" /></div>
            <div class="col-sm-4"> <Card stype="Sci-Fi" slink="https://www.youtube.com/watch?v=fzmM0AB60QQ" sname="Lost in Space" imgsrc="https://www.indiewire.com/wp-content/uploads/2018/05/lis_110_sg_a00001r.jpg?resize=800,400" /></div>
            <div class="col-sm-4"><Card stype="Adventure" slink="https://www.youtube.com/watch?v=xLTdy6PfotA" sname="Cursed" imgsrc="https://www.denofgeek.com/wp-content/uploads/2020/06/cursed-poster-katherine-langford-netflix.jpg?resize=768%2C432" /></div>
            </div>
        </>

    );

}
export default Card;
export { CardDouble }