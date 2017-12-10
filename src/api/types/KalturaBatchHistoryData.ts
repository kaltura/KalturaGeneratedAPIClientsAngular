
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaObjectBase, KalturaObjectBaseArgs } from '../kaltura-object-base';

export interface KalturaBatchHistoryDataArgs  extends KalturaObjectBaseArgs {
    schedulerId? : number;
	workerId? : number;
	batchIndex? : number;
	timeStamp? : number;
	message? : string;
	errType? : number;
	errNumber? : number;
	hostName? : string;
	sessionId? : string;
}


export class KalturaBatchHistoryData extends KalturaObjectBase {

    schedulerId : number;
	workerId : number;
	batchIndex : number;
	timeStamp : number;
	message : string;
	errType : number;
	errNumber : number;
	hostName : string;
	sessionId : string;

    constructor(data? : KalturaBatchHistoryDataArgs)
    {
        super(data);
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaBatchHistoryData' },
				schedulerId : { type : 'n' },
				workerId : { type : 'n' },
				batchIndex : { type : 'n' },
				timeStamp : { type : 'n' },
				message : { type : 's' },
				errType : { type : 'n' },
				errNumber : { type : 'n' },
				hostName : { type : 's' },
				sessionId : { type : 's' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaBatchHistoryData',KalturaBatchHistoryData);
