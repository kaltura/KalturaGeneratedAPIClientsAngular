
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaEntryServerNodeType } from './KalturaEntryServerNodeType';
import { KalturaJobData, KalturaJobDataArgs } from './KalturaJobData';

export interface KalturaConvertLiveSegmentJobDataArgs  extends KalturaJobDataArgs {
    entryId? : string;
	assetId? : string;
	mediaServerIndex? : KalturaEntryServerNodeType;
	fileIndex? : number;
	srcFilePath? : string;
	destFilePath? : string;
	endTime? : number;
	destDataFilePath? : string;
}


export class KalturaConvertLiveSegmentJobData extends KalturaJobData {

    entryId : string;
	assetId : string;
	mediaServerIndex : KalturaEntryServerNodeType;
	fileIndex : number;
	srcFilePath : string;
	destFilePath : string;
	endTime : number;
	destDataFilePath : string;

    constructor(data? : KalturaConvertLiveSegmentJobDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConvertLiveSegmentJobData' },
				entryId : { type : 's' },
				assetId : { type : 's' },
				mediaServerIndex : { type : 'es', subTypeConstructor : KalturaEntryServerNodeType, subType : 'KalturaEntryServerNodeType' },
				fileIndex : { type : 'n' },
				srcFilePath : { type : 's' },
				destFilePath : { type : 's' },
				endTime : { type : 'n' },
				destDataFilePath : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConvertLiveSegmentJobData',KalturaConvertLiveSegmentJobData);
