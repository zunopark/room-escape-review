
// 사실 근데 하나하나 조회 안해도 되고 가져온것들에서 뽑아와도될듯?
const DetailPresenter = ({ data }) => {
    console.log(data)
    return (
        <div className="main">detail {data && data.category}</div>
    );
}

export default DetailPresenter;