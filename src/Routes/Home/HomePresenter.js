import Theme from "../../Components/Theme"

const HomePresenter = ({data}) => {
    console.log(data)
    return (
        <div className="section">
            {data.map((item, id) => (
              <Theme key={id} item={item} id={1} />
            ))}
        </div>
    );
}

export default HomePresenter;