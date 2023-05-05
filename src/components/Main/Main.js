import barber from '../../images/blog-atmosfera-barbershopa.png';

function Main(
    { page_info }
) {

    return (
        <main className="main">
            <div className='main__pict'>
                <img src={barber}></img>
                <div className='main__pict-title-box'>
                    <p className='main__pict-title'>The Best Hair Style 2021</p>
                </div>
            </div>
            <div className='main__info_box'>
                <h1 className='main__title'>{page_info.title}</h1>
                <p className='main__text'>{page_info.text}</p>
                <button className='main__button'>Shopping Now</button>

            </div>
        </main>

    );
}

export default Main;
