module 0x92f57e26b6b6cb1c9e699c794cefb48bbb7c0267a7e4e2e397b2253c5b10dd51::Proj1 {
    use aptos_framework::signer;
    use aptos_framework::vector;

    struct Bounty has store, drop {
        description: vector<u8>,
        issue_id: u64,
        bounty_amount: u64,
        repo: vector<u8>,
        complete: bool,
        username: vector<u8>,
    }

    struct ProjectData has key {
        maintainer: address,
        bounties: vector<Bounty>,
        contributors: vector<address>,
        contributor_usernames: vector<vector<u8>>,
        submitted_contributors: vector<address>,
        bounties_count: u64,
    }

    // Function to initialize the project data, called when the project is created
    public fun initialize(account: &signer) {
        let project_data = ProjectData {
            maintainer: signer::address_of(account),
            bounties: vector::empty(),
            contributors: vector::empty(),
            contributor_usernames: vector::empty(),
            submitted_contributors: vector::empty(),
            bounties_count: 0,
        };
        move_to(account, project_data);
    }

    // Function to allow contributors to apply for a bounty
    public fun apply_bounty(account: &signer, github_username: vector<u8>) acquires ProjectData {
        let sender = signer::address_of(account);
        let project_data = borrow_global_mut<ProjectData>(sender);
        
        assert!(!vector::contains(&project_data.contributors, &sender), 101);
        assert!(vector::length(&github_username) > 0, 102);
        
        vector::push_back(&mut project_data.contributors, sender);
        vector::push_back(&mut project_data.contributor_usernames, github_username);
    }

    // Function to create a new bounty
    public fun create_bounty(
        account: &signer,
        description: vector<u8>,
        issue_id: u64,
        bounty_amount: u64,
        repo: vector<u8>,
        username: vector<u8>
    ) acquires ProjectData {
        let sender = signer::address_of(account);
        let project_data = borrow_global_mut<ProjectData>(sender);
        
        // Ensure that only the maintainer can create a bounty
        assert!(sender == project_data.maintainer, 103);
        
        // Create a new bounty and add it to the project data
        let new_bounty = Bounty {
            description,
            issue_id,
            bounty_amount,
            repo,
            complete: false,
            username,
        };
        
        vector::push_back(&mut project_data.bounties, new_bounty);
        project_data.bounties_count = project_data.bounties_count + 1;
    }

    // Function to get the count of bounties
    #[view]
    public fun get_bounties_count(account_addr: address): u64 acquires ProjectData {
        //let sender = signer::address_of(account);
        let project_data = borrow_global<ProjectData>(account_addr);
        project_data.bounties_count
    }
}