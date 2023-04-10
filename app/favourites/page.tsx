import getCurrentUser from "../actions/GetCurrentUser";
import getFavouriteListings from "../actions/GetFavouriteListings";
import ClientOnly from "../components/ClientOnly";
import EmptyState from "../components/EmptyState";
import FavouritesClient from "./FavouritesClient";

const FavouritesPage = async () => {
	const listings = await getFavouriteListings();
	const currentUser = await getCurrentUser();

	if (listings.length === 0) {
		return (
			<ClientOnly>
				<EmptyState
					title="No favourites found"
					subtitle="Looks like you have no favourite listings"
				/>
			</ClientOnly>
		);
	}

	return (
		<ClientOnly>
			<FavouritesClient listings={listings} currentUser={currentUser} />
		</ClientOnly>
	);
};

export default FavouritesPage;
