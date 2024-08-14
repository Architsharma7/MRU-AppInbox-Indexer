import {
  AppInbox,
  AppInbox_BatchSubmitted,
  AppInbox_OwnershipTransferred,
  AppInbox_RegisteredSTF,
  AppInbox_TicketCreated,
} from "generated";

AppInbox.BatchSubmitted.handler(async ({ event, context }) => {
  const entity: AppInbox_BatchSubmitted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    batchHeight: event.params.batchHeight,
    batchRoot: event.params.batchRoot,
    lastBlockHeight: event.params.lastBlockHeight,
    firstBlockHeight: event.params.firstBlockHeight,
    stateRoot: event.params.stateRoot,
  };

  context.AppInbox_BatchSubmitted.set(entity);
});


AppInbox.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: AppInbox_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.AppInbox_OwnershipTransferred.set(entity);
});


AppInbox.RegisteredSTF.handler(async ({ event, context }) => {
  const entity: AppInbox_RegisteredSTF = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    stateMachineHash: event.params.stateMachineHash,
    genesisStateHash: event.params.genesisStateHash,
    operator: event.params.operator,
  };

  context.AppInbox_RegisteredSTF.set(entity);
});


AppInbox.TicketCreated.handler(async ({ event, context }) => {
  const entity: AppInbox_TicketCreated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    ticketNumber: event.params.ticketNumber,
    sender: event.params.sender,
    identifier: event.params.identifier,
    message: event.params.message,
  };

  context.AppInbox_TicketCreated.set(entity);
});

