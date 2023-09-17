
// 사실 근데 하나하나 조회 안해도 되고 가져온것들에서 뽑아와도될듯?
const DetailPresenter = ({ theme, comment }) => {
    console.log(comment)
    return (
        <>
        <div className="">theme : {theme && theme.category}</div>     
        <div className="">comment : {comment && comment.map((value) => {
            return value.comment;
        })}</div>     
        </>
    );
}

export default DetailPresenter;