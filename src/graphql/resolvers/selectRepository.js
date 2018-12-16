import GET_SELECTED_REPOSITORIES from '../queries/getSelectedRepositories';


const selectRepository = (_, { id, isSelected }, { cache }) => {
    let { selectedRepositoryIds } = cache.readQuery({
        query: GET_SELECTED_REPOSITORIES,
    });

    selectedRepositoryIds = isSelected
        ? selectedRepositoryIds.filter(repositoryId => repositoryId !== id)
        : selectedRepositoryIds.concat(id);

    cache.writeQuery({
        query: GET_SELECTED_REPOSITORIES,
        data: { selectedRepositoryIds },
    });

    return { id, isSelected: !isSelected };
};

export default selectRepository;
