<script lang="ts">
import Details from '$lib/components/details/Details.svelte'
import DetailsRow from '$lib/components/details/DetailsRow.svelte'
import type { User } from '$lib/types/user'

let { user }: { user: User } = $props()
</script>

<Details>
  {#snippet content()}
    <DetailsRow title="ID" value={user.id} />
    <DetailsRow title="Name" value={user.name} />
    <DetailsRow title="Username" value={user.username} />
    <DetailsRow title="Email" value={user.email} />
    <DetailsRow title="Address">
      {#snippet content()}
        <div>{user.address.street}, {user.address.suite}</div>
        <div>{user.address.city}, {user.address.zipcode}</div>
        <div>Lat: {user.address.geo.lat}, Lng: {user.address.geo.lng}</div>
      {/snippet}
    </DetailsRow>
    <DetailsRow title="Phone" value={user.phone} />
    <DetailsRow title="Website" value={user.website} />
    <DetailsRow title="Company">
      {#snippet content()}
        <div>{user.company.name}</div>
        <div>{user.company.catchPhrase}</div>
        <div>{user.company.bs}</div>
      {/snippet}
    </DetailsRow>
  {/snippet}
</Details>