import { UserUrl } from "../../type";
import "./UserListUrls.css";

type UserListUrlsProps = {
  urls: UserUrl[];
  handleDeleteUrl: (shortUrl: string) => void;
};

function UserListUrls({ urls, handleDeleteUrl }: UserListUrlsProps) {
  const timeConverter = (date: number) => {
    let dateObject = new Date(date * 1000);
    return dateObject.toLocaleDateString();
  };


  return (
    <div className="user-list__container">
      <h1 className="user-list__title">Your Urls:</h1>
      <table className="user-list__table">
        <thead>
          <tr className="user-list__table-tr">
            <th className="user-list__table-th">Short URL</th>
            <th className="user-list__table-th">Original URL</th>
            <th className="user-list__table-th">Creation Date</th>
            <th className="user-list__table-th"></th>
          </tr>
        </thead>
        <tbody className="user-list__table-tbody">
          {urls.map((url: UserUrl) => (
            <tr key={url.id} className="user-list__table-tbody-tr">
              <td className="user-list__table-td">
                <a
                  href={`${process.env.REACT_APP_BACKEND_URL}/${url.short_url}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {`${process.env.REACT_APP_BACKEND_URL}/${url.short_url}`}
                </a>
              </td>
              <td className="user-list__table-td">{url.original_url}</td>
              <td className="user-list__table-td">{timeConverter(url.created_at)}</td>
              <td className="user-list__table-td">
                {" "}
                <button 
                onClick={() => handleDeleteUrl(url.short_url)}
                className="user-list__button"
                >
                  ✕
                </button>{" "}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default UserListUrls;
