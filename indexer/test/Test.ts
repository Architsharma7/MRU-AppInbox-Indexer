import assert from "assert";
import { 
  TestHelpers,
  AppInbox_BatchSubmitted
} from "generated";
const { MockDb, AppInbox } = TestHelpers;

describe("AppInbox contract BatchSubmitted event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for AppInbox contract BatchSubmitted event
  const event = AppInbox.BatchSubmitted.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("AppInbox_BatchSubmitted is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await AppInbox.BatchSubmitted.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualAppInboxBatchSubmitted = mockDbUpdated.entities.AppInbox_BatchSubmitted.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedAppInboxBatchSubmitted: AppInbox_BatchSubmitted = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      batchHeight: event.params.batchHeight,
      batchRoot: event.params.batchRoot,
      lastBlockHeight: event.params.lastBlockHeight,
      firstBlockHeight: event.params.firstBlockHeight,
      stateRoot: event.params.stateRoot,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualAppInboxBatchSubmitted, expectedAppInboxBatchSubmitted, "Actual AppInboxBatchSubmitted should be the same as the expectedAppInboxBatchSubmitted");
  });
});
