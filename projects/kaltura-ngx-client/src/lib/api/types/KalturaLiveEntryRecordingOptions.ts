
import { KalturaObjectMetadata, typesMappingStorage } from '../kaltura-object-base';
import { KalturaNullableBoolean } from './KalturaNullableBoolean';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaLiveEntryRecordingOptionsArgs  extends KalturaObjectBaseArgs {
    shouldCopyEntitlement? : KalturaNullableBoolean;
	shouldCopyScheduling? : KalturaNullableBoolean;
	shouldCopyThumbnail? : KalturaNullableBoolean;
	shouldMakeHidden? : KalturaNullableBoolean;
	shouldAutoArchive? : KalturaNullableBoolean;
	nonDeletedCuePointsTags? : string;
}


export class KalturaLiveEntryRecordingOptions extends KalturaObjectBase {

    shouldCopyEntitlement : KalturaNullableBoolean;
	shouldCopyScheduling : KalturaNullableBoolean;
	shouldCopyThumbnail : KalturaNullableBoolean;
	shouldMakeHidden : KalturaNullableBoolean;
	shouldAutoArchive : KalturaNullableBoolean;
	nonDeletedCuePointsTags : string;

    constructor(data? : KalturaLiveEntryRecordingOptionsArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaLiveEntryRecordingOptions' },
				shouldCopyEntitlement : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				shouldCopyScheduling : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				shouldCopyThumbnail : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				shouldMakeHidden : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				shouldAutoArchive : { type : 'en', subTypeConstructor : KalturaNullableBoolean, subType : 'KalturaNullableBoolean' },
				nonDeletedCuePointsTags : { type : 's' }
            }
        );
        return result;
    }
}

typesMappingStorage['KalturaLiveEntryRecordingOptions'] = KalturaLiveEntryRecordingOptions;