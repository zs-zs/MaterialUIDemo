import { Route, Switch } from "react-router";
import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import { images } from "../images";

export function Gallery(props) {
    return (
        <Switch>
            <Route path="/gallery" exact>
                <div className="gallery">
                    <ImageGallery items={images} />
                </div>
            </Route>
        </Switch >
    )

}