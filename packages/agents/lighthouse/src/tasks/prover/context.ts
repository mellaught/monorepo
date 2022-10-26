import { ChainReader, ConnextContractInterfaces } from "@connext/nxtp-txservice";
import { ChainData, Logger } from "@connext/nxtp-utils";
import { Database } from "@connext/nxtp-adapters-database";

import { NxtpLighthouseConfig } from "../../config";

import { Relayer } from "./adapters";

export type ProverContext = {
  logger: Logger;
  adapters: {
    // Stateful interfaces for peripherals.
    chainreader: ChainReader; // For reading and executing txs on blockchain using RPC providers.
    contracts: ConnextContractInterfaces; // Used to read and write to smart contracts.
    relayer: Relayer; // Used to send txs to relayer.
    database: Database;
  };
  config: NxtpLighthouseConfig;
  chainData: Map<string, ChainData>;
};