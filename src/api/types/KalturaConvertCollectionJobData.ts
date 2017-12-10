
import { KalturaObjectMetadata } from '../kaltura-object-base';
import { KalturaTypesFactory } from '../kaltura-types-factory';
import { KalturaConvertCollectionFlavorData } from './KalturaConvertCollectionFlavorData';
import { KalturaConvartableJobData, KalturaConvartableJobDataArgs } from './KalturaConvartableJobData';

export interface KalturaConvertCollectionJobDataArgs  extends KalturaConvartableJobDataArgs {
    destDirLocalPath? : string;
	destDirRemoteUrl? : string;
	destFileName? : string;
	inputXmlLocalPath? : string;
	inputXmlRemoteUrl? : string;
	commandLinesStr? : string;
	flavors? : KalturaConvertCollectionFlavorData[];
}


export class KalturaConvertCollectionJobData extends KalturaConvartableJobData {

    destDirLocalPath : string;
	destDirRemoteUrl : string;
	destFileName : string;
	inputXmlLocalPath : string;
	inputXmlRemoteUrl : string;
	commandLinesStr : string;
	flavors : KalturaConvertCollectionFlavorData[];

    constructor(data? : KalturaConvertCollectionJobDataArgs)
    {
        super(data);
        if (typeof this.flavors === 'undefined') this.flavors = [];
    }

    protected _getMetadata() : KalturaObjectMetadata
    {
        const result = super._getMetadata();
        Object.assign(
            result.properties,
            {
                objectType : { type : 'c', default : 'KalturaConvertCollectionJobData' },
				destDirLocalPath : { type : 's' },
				destDirRemoteUrl : { type : 's' },
				destFileName : { type : 's' },
				inputXmlLocalPath : { type : 's' },
				inputXmlRemoteUrl : { type : 's' },
				commandLinesStr : { type : 's' },
				flavors : { type : 'a', subTypeConstructor : KalturaConvertCollectionFlavorData, subType : 'KalturaConvertCollectionFlavorData' }
            }
        );
        return result;
    }
}

KalturaTypesFactory.registerType('KalturaConvertCollectionJobData',KalturaConvertCollectionJobData);
