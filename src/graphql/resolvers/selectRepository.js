import GET_SELECTED_REPOSITORIES from '../queries/getSelectedRepositories';


const selectRepository = (_, { id, isSelected }, { cache }) => {
    console.log(id, isSelected);
    let { selectedRepositoryIds } = cache.readQuery({
        query: GET_SELECTED_REPOSITORIES,
    });
    
    selectedRepositoryIds = isSelected
        ? selectedRepositoryIds.filter(itemId => itemId !== id)
        : selectedRepositoryIds.concat(id);

    cache.writeQuery({
        query: GET_SELECTED_REPOSITORIES,
        data: { selectedRepositoryIds },
    });

    return { id, isSelected: !isSelected };
};

export default selectRepository;
