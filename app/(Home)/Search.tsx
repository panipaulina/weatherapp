"use client";

import React, { useState } from "react";
import useSWRMutation from "swr/mutation";

const fetcher = async (url: any, { arg }: any) => {
  const resp = await fetch(`${url}/${arg}`);

  return await resp.json();
};

export default function Search() {
  const [search, setSearch] = useState("");

  const { data, error, isMutating, trigger, reset } = useSWRMutation(
    "/api/search",
    fetcher
  );

  if (data && search) {
    return (
      <div>
        It is {data?.weather?.[0]?.description} in {data?.name} at the moment.
        <button
          onClick={() => {
            reset();
            setSearch("");
          }}
        >
          Clear
        </button>
      </div>
    );
  }

  if (isMutating) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Something went wrong</div>;
  }

  return (
    <div>
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      <button onClick={() => trigger(search)}>Search</button>
    </div>
  );
}
